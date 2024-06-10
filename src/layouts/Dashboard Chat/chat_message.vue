<template>
    <div>
        <div v-for="(msg, index) in messages" :key="index">
            <strong>{{ msg.user }}</strong>: {{ msg.text }} - {{ formatTime(msg.timestamp) }}
        </div>
        <input v-model="user" placeholder="Enter your name" />
        <input v-model="message" placeholder="Type your message" />
        <button @click="sendMessage">Send</button>
        <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import * as signalR from '@microsoft/signalr';
import localStorageAuthService from '@/common/storages/authStorage';

export default defineComponent({
    name: 'ChatComponent',
    setup() {
        const messages = ref([] as { user: string, text: string, timestamp: string }[]);
        const user = ref("");
        const message = ref("");
        const errorMessage = ref("");
        const connection = ref<signalR.HubConnection | null>(null);

        async function sendMessage() {
            if (user.value && message.value && connection.value?.state === signalR.HubConnectionState.Connected) {
                try {
                    const response = await axios.post('https://localhost:7237/api/ChatMess/send', { user: user.value, message: message.value }, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorageAuthService.getAccessToken()
                        }
                    });
                    if (response.status === 200) {
                        // Clear the message input after successful sending
                        message.value = "";
                    } else {
                        errorMessage.value = "Failed to send message. Please try again.";
                    }
                } catch (error) {
                    console.error('Send failed:', error);
                    errorMessage.value = "Failed to send message. Please try again.";
                }
            } else {
                errorMessage.value = "Please enter your name and message, and ensure the SignalR connection is established.";
            }
        }

        async function setupSignalRConnection() {
            try {
                connection.value = new signalR.HubConnectionBuilder()
                    .withUrl("https://localhost:7237/chatHub")
                    .configureLogging(signalR.LogLevel.Information)
                    .build();

                connection.value.on("ReceiveMessage", (user: string, message: string, timestamp: string) => {
                    messages.value.push({ user, text: message, timestamp });
                });

                await connection.value.start();
                console.log('SignalR connection established');
            } catch (error) {
                console.error('Error setting up SignalR connection:', error);
                errorMessage.value = "Error setting up SignalR connection.";
            }
        }

        async function loadMessages() {
            try {
                const response = await axios.get('https://localhost:7237/api/ChatMess/messages', {
                    headers: {
                        'Authorization': 'Bearer ' + localStorageAuthService.getAccessToken()
                    }
                });
                if (response.status === 200) {
                    messages.value = response.data;
                    console.log(messages.value);
                } else {
                    console.error('Failed to load messages:', response.statusText);
                    errorMessage.value = "Failed to load messages. Please try again.";
                }
            } catch (error) {
                console.error('Failed to load messages:', error);
                errorMessage.value = "Failed to load messages. Please try again.";
            }
        }

        // Load messages when the component is mounted
        onMounted(async () => {
            await loadMessages();
            await setupSignalRConnection();
        });

        // Format timestamp to display in the UI
        function formatTime(timestamp: string) {
            const date = new Date(timestamp);
            return date.toLocaleString();
        }

        return {
            user,
            message,
            messages,
            errorMessage,
            sendMessage,
            formatTime,
        };
    },
});
</script>

<style scoped></style>
