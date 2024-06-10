<template>
    <div>
        <v-card class="mx-auto" style="width: 1700px;height: 100vh;position: relative;">
            <v-list lines="two" v-for="(item, index) in messages" :key="index">
                <v-list-item :prepend-avatar="item.avatar" :title="item.fullName">
                    <template v-slot:subtitle>
                        <span class="font-weight-bold"> {{ item.messages }}</span>
                    </template>
                </v-list-item>
            </v-list>
            <div style="position: absolute;bottom: 0;right: 0;left: 0;">
                <v-row>
                    <v-col cols="10">
                        <v-textarea v-model="message" label="Nhập tin nhắn" clearable counter></v-textarea>
                    </v-col>
                    <v-col style="display: flex;align-items: center;justify-content: center;">
                        <v-btn @click="sendMessage">Gửi tin nhắn</v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-card>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { ref } from 'vue';
import * as signalR from '@microsoft/signalr';
import axios from '@/plugins/axios/axios';
import localStorageAuthService from '@/common/storages/authStorage';
import router from '@/router';
const messages = ref<any | undefined>([]);
const message = ref("");
const connection = ref<signalR.HubConnection | null>(null);
const date = ref(new Date);
const userId = ref<any | undefined>('');
const formattedDate = computed(() => {
    const d = date.value;
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
});
const setupSignalRConnection = async () => {
    try {
        connection.value = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:7237/chatHub")
            .configureLogging(signalR.LogLevel.Information)
            .build();
        connection.value.on("ReceiveMessage", async () => {
            console.log('Ok')
            await loadMessages();
        });
        await connection.value.start();
    } catch (error) {
        console.error('Error setting up SignalR connection:', error);
    }
}
const sendMessage = async () => {
    alert('a');
    if (message.value && connection.value?.state === signalR.HubConnectionState.Connected) {
        try {
            const response = await axios.post('https://localhost:7237/api/ChatMess/send', { userId: userId.value, messages: message.value }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorageAuthService.getAccessToken()
                }
            });
            if (response.status === 200) {
                message.value = "";
            }
        } catch (error) {
            console.error('Send failed:', error);
        }
    }
}
const loadMessages = async () => {
    try {
        const response = await axios.get('https://localhost:7237/api/ChatMess/messages/' + userId.value, {
            headers: {
                'Authorization': 'Bearer ' + localStorageAuthService.getAccessToken()
            }
        });
        if (response.status === 200) {
            messages.value = response.data.data;
            console.log(messages.value);
        } else {
            console.error('Failed to load messages:', response.statusText);
        }
    } catch (error) {
        console.error('load messages:', error);
    }
}
onMounted(async () => {
    userId.value = router.currentRoute.value.params.id;
    await setupSignalRConnection();
    await loadMessages(userId.value);
})
</script>

<style></style>