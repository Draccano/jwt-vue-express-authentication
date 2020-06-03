<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <div class="w-8/12 mx-auto py-10 px-10">
      <div class="bg-white h-1/2 px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="text-xl">Your messages</h1>
        <form class="w-full py-6">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Title
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                v-model="title"
                type="text"
                placeholder="Olala"
              />
              <p v-show="error" class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full md:w-1/3 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                description
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                v-model="description"
                type="text"
                placeholder="Dance dance"
              />
            </div>
            <div class="md:flex md:items-center w-full md:w-1/3 px-3">
              <button
                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 my-6 rounded"
                type="button"
                @click="createMessage"
              >
                Create
              </button>
            </div>
          </div>
        </form>
        <div v-for="message in secretMessages" :key="message._id">
          <div class="flex flex-row justify-between py-6">
            <div class="flex-1 flex-col">
              <div class="break-all text-xl">{{ message.title }}</div>
              <!-- <div class="px-3">:</div> -->
              <div class="px-4 break-all">{{ message.description }}</div>
            </div>
            <div>
               <button @click="($event) => deleteMessage(message._id, $event)" type="button" class="px-2 text-gray-500 hover:text-gray-600 focus:outline-none">
                <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                    <path fill-rule="evenodd" d="M13.59 12l7.066-7.067a1.123 1.123 0 10-1.589-1.589L12 10.411 4.933 3.344a1.123 1.123 0 10-1.59 1.59L10.412 12l-7.067 7.067a1.123 1.123 0 101.589 1.589L12 13.589l7.067 7.067a1.12 1.12 0 001.59 0c.438-.439.438-1.15 0-1.59L13.588 12z"/>
                </svg>  
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessagesService from "@/services/MessagesService";
export default {
  data() {
    return {
      title: "",
      description: "",
      userId: "",
      error: "",
      // secretMessages: [
      //   {
      //     title: 'My launch',
      //     message: 'firstly cook then eat'
      //   }
      // ]
      secretMessages: null
    };
  },
  methods: {
    async createMessage() {
      try {
        const response = await MessagesService.create({
          userId: this.userId,
          title: this.title,
          description: this.description
        });
        this.secretMessages = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteMessage(id, event) {
      console.log(event, id)
      const response = await MessagesService.delete({messageId: id, userId: this.$store.state.user._id});
      this.secretMessages = response.data;
    }
  },  
  async mounted() {
    this.userId = this.$store.state.user._id;
    const response = await MessagesService.index(this.userId);
    this.secretMessages = response.data;
  }
};
</script>

<style>
</style>