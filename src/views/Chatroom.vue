<template>
    <div class="container">
        <Navbar />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow.vue'
import NewChatForm from '../components/NewChatForm.vue'
import Navbar from '../components/Navbar.vue'
import getUser from '../composable/getUser'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
    components: {
        Navbar,
        ChatWindow,
        NewChatForm
    },
    setup(props, context){
        const router = useRouter()
        const { user } = getUser()

        watch(user, () => {
            if (!user.value){
                router.push({ name: 'Welcome' })
            }
        })
    }
}
</script>

<style>

</style>