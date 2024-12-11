<template>
  <div class="space-y-6 p-4">
    <div class="mx-auto md:w-2/3 lg:w-1/2">
      <p class="text-lg font-semibold">
        About
      </p>
      <p>
        This tool helps you find out which accounts you follow that don't follow you back and which accounts follow you that you don't follow back.
      </p>
      <p class="text-lg font-semibold">
        Directions
      </p>
      <p>
        Go to <a
          href="https://accountscenter.instagram.com/info_and_permissions/dyi/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-400 hover:text-blue-500"
        >Instagram Data Download</a> and tick the box for followers and following. Request the data as a JSON file and upload them here in the appropriate sections. That's it! You will see the results below.
      </p>
    </div>
    <div class="flex flex-row justify-center space-x-4">
      <div class="space-y-1">
        <p class="text-lg font-semibold">
          Followers
        </p>
        <input
          class="rounded-md border border-gray-300 p-2 file:mr-1.5 file:border-0 file:bg-transparent file:p-0 file:font-medium file:text-gray-500 file:outline-none dark:file:text-gray-400"
          type="file"
          accept="application/json"
          @change="uploadFollowers($event)"
        >
      </div>

      <div class="space-y-1">
        <p class="text-lg font-semibold">
          Following
        </p>
        <input
          class="rounded-md border border-gray-300 p-2 file:mr-1.5 file:border-0 file:bg-transparent file:p-0 file:font-medium file:text-gray-500 file:outline-none dark:file:text-gray-400"
          type="file"
          accept="application/json"
          @change="uploadFollowing($event)"
        >
      </div>
    </div>

    <div class="mx-auto flex flex-row space-x-4 md:w-2/3 lg:w-1/2">
      <div class="w-1/2 rounded-lg p-2">
        <p class="text-lg font-semibold">
          Accounts you don't follow back
        </p>
        <p
          v-for="(account, index) in accountsYouDontFollowBack"
          :key="account"
        >
          {{ index + 1 }}. {{ account }}
        </p>
      </div>
      <div class="w-1/2 rounded-lg p-2">
        <p class="text-lg font-semibold">
          Accounts who don't follow you back
        </p>
        <p
          v-for="(account, index) in accountsWhoDontFollowYouBack"
          :key="account"
        >
          {{ index + 1 }}. {{ account }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const followers = ref(null);
const following = ref(null);

function uploadFollowers(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        followers.value = JSON.parse(e.target?.result as string).map(entry => entry.string_list_data[0].value);
      }
      catch {
        alert('Invalid JSON file for Followers!');
        followers.value = null;
      }
    };
    reader.readAsText(file);
  }
}

function uploadFollowing(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        following.value = JSON.parse(e.target?.result as string).relationships_following.map(entry => entry.string_list_data[0].value);
      }
      catch {
        alert('Invalid JSON file for Following!');
        following.value = null;
      }
    };
    reader.readAsText(file);
  }
}

const accountsWhoDontFollowYouBack = computed(() => {
  if (!followers.value || !following.value) return [];
  return following.value.filter(user => !followers.value.includes(user));
});

const accountsYouDontFollowBack = computed(() => {
  if (!followers.value || !following.value) return [];
  return followers.value.filter(user => !following.value.includes(user));
});
</script>
