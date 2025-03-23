<script lang="ts">
  import TextInput from '$lib/components/ui/_form/TextInput.svelte';
	import { writable } from 'svelte/store';

	type Goal = {
		id: number;
		text: string;
		rating: number;
	};

	const goals = writable<Goal[]>([
		{ id: 1, text: '30分運動する', rating: 5 },
		{ id: 2, text: '本を1章読む', rating: 0 }
	]);

	let newGoalText = $state('');

	function addGoal() {
		if (newGoalText.trim()) {
			$goals = [...$goals, {
				id: Date.now(),
				text: newGoalText,
				rating: 0
			}];
			newGoalText = '';
		}
	}

	function updateRating(goalId: number, newRating: number) {
		console.log({goalId, newRating})
		$goals = $goals.map(goal => 
			goal.id === goalId ? {...goal, rating: newRating} : goal
		);
	}
</script>

<div class="max-w-2xl mx-auto p-6">
	<div class="flex gap-2 mb-8">
		<TextInput
			bind:value={newGoalText}
			placeholder="読書1分"
			keydownFunction={addGoal}
		/>
		<button
			onclick={addGoal}
			class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
		>
			追加
		</button>
	</div>

	{#each $goals as goal (goal.id)}
		<div class="bg-white rounded-lg shadow-md p-6 mb-4">
			<p class="text-lg mb-3">{goal.text}</p>
			<div class="flex items-center gap-4">
				<div class="flex gap-1">
					{#each Array(5) as _, i}
						<button
							class="text-2xl"
							onclick={() => updateRating(goal.id, i + 1)}
							disabled={!newGoalText}
						>
							{#if i < goal.rating}
								<span class="text-yellow-400">★</span>
							{:else}
								<span class="text-gray-300">★</span>
							{/if}
						</button>
					{/each}
				</div>
				<span class="text-gray-600">
					{#if goal.rating === 0}
						未評価
					{:else if goal.rating === 1}
						未達成
					{:else if goal.rating === 2}
						もう少し
					{:else if goal.rating === 3}
						普通
					{:else if goal.rating === 4}
						良い
					{:else}
						素晴らしい
					{/if}
				</span>
			</div>
		</div>
	{/each}
</div>

<style>
	:global(body) {
		background-color: #f0f2f5;
	}
</style>
