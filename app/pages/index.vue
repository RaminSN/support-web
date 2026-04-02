<script setup lang="ts">
const { user, logout, currentProvider } = useOidcAuth();
</script>

<template>
  <UContainer class="py-10">
    <UCard>
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-semibold text-highlighted">
            {{ $t("home.welcome", { name: user?.userName || "User" }) }}
          </h2>
          <p class="text-sm text-muted mt-1">
            {{ $t("home.signedInVia", { provider: user?.provider }) }}
          </p>
        </div>
        <UButton
          color="neutral"
          variant="outline"
          icon="i-lucide-log-out"
          @click="logout(currentProvider)"
        >
          {{ $t("home.signOut") }}
        </UButton>
      </div>
    </UCard>
  </UContainer>
</template>
