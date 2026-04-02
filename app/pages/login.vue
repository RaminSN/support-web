<script setup lang="ts">
definePageMeta({
  layout: false,
  oidcAuth: {
    enabled: false,
  },
});

const { t } = useI18n();
const { loggedIn, login, currentProvider } = useOidcAuth();

if (loggedIn.value) {
  navigateTo("/");
}

const loading = ref(false);

const providers = computed(() => [
  {
    label: t("login.provider"),
    icon: "i-lucide-shield",
    loading: loading.value,
    onClick: async () => {
      loading.value = true;
      await login(currentProvider.value);
    },
  },
]);
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-default">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :title="$t('login.title')"
        :description="$t('login.description')"
        icon="i-lucide-lock"
        :providers="providers"
        :fields="[]"
      >
        <template #footer>
          {{ $t("login.footer") }}
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
