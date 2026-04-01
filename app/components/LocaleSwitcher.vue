<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const items = computed(() =>
  locales.value.map((l) => ({
    label: typeof l === "string" ? l : l.name,
    value: typeof l === "string" ? l : l.code,
  }))
);

const current = computed(() =>
  items.value.find((i) => i.value === locale.value)
);
</script>

<template>
  <UDropdownMenu
    :items="items.map((i) => ({ ...i, onSelect: () => setLocale(i.value) }))"
  >
    <UButton
      color="neutral"
      variant="ghost"
      icon="i-lucide-languages"
      :label="current?.label"
    />
  </UDropdownMenu>
</template>
