<script lang="ts">
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

	let newGoalText = '';

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
		$goals = $goals.map(goal => 
			goal.id === goalId ? {...goal, rating: newRating} : goal
		);
	}
</script>

<div class="max-w-2xl mx-auto p-6">
	<div class="flex gap-2 mb-8">
		<input
			type="text"
			bind:value={newGoalText}
			placeholder="今日の目標を入力"
			class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			on:keydown={(e) => e.key === 'Enter' && addGoal()}
		/>
		<button
			on:click={addGoal}
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
							on:click={() => updateRating(goal.id, i + 1)}
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
