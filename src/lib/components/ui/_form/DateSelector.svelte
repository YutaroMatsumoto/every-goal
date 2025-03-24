<!-- 日付選択は常にglobalStateで管理する -->
<script lang="ts">
  import { format, addDays, subDays } from 'date-fns';
  import { ja } from 'date-fns/locale';

  // type Props = {
  //   selectedDate: Date;
  // }

  // let { selectedDate = $bindable() }: Props = $props();

  // 昨日、今日、明日の日付を計算（通常の定数として定義）
  let selectedDate = $state<Date>(new Date());
  const today = new Date()
  const yesterday = subDays(today, 1);
  const tomorrow = addDays(today, 1);
  
  // 表示用の日付配列
  const availableDates = $derived([yesterday, today, tomorrow]);

  function formatDate(date: Date): string {
    return format(date, 'M/d', { locale: ja });
  }

  function isToday(date: Date): boolean {
    return format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');
  }

  function getDateLabel(date: Date): string {
    if (isToday(date)) return '今日';
    if (format(date, 'yyyy-MM-dd') === format(yesterday, 'yyyy-MM-dd')) return '昨日';
    if (format(date, 'yyyy-MM-dd') === format(tomorrow, 'yyyy-MM-dd')) return '明日';
    return '';
  }

  function isSelected(date: Date): boolean {
    return format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
  }
</script>

<div class="text-blue-500 p-2">
  <div class="flex justify-between">
    {#each availableDates as date}
      <button
        class="flex flex-col items-center justify-center rounded-lg w-20 h-16
               {isSelected(date) ? 'bg-blue-500 text-white' : 'hover:bg-blue-400 '}"
        onclick={() => selectedDate = date}
      >
        <span class="font-bold">{getDateLabel(date)}</span>
        <!-- <span class="text-xs font-bold">{format(date, 'E', { locale: ja })}</span> -->
        <span class="text-xs font-bold">{formatDate(date)} ({format(date, 'E', { locale: ja })})</span>
      </button>
    {/each}
  </div>
</div>