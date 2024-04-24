<template>
	<div class="product-list">
		<v-table>
			<thead>
				<tr>
					<th class="text-left">
						id
					</th>
					<th class="text-left">
						Title
					</th>
					<th class="text-left">
						Price
					</th>
					<th class="text-left">
						description
					</th>
					<th class="text-left">
						Category
					</th>
					<th class="text-center">
						Image
					</th>
					<th class="text-left">
						Rating
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in products" :key="item.id">
					<td>{{ item.id }}</td>
					<td>
						<p class="description">{{ item.title }}</p>
					</td>
					<td>{{ item.price }}</td>
					<td class="description">
						<p class="description">{{ item.description }}
						</p>
					</td>
					<td>{{ item.category }}</td>
					<td>
						<img :src="item.image" alt="">
					</td>
					<td>{{ item.rating.rate }}</td>
				</tr>
			</tbody>
		</v-table>
	</div>
</template>

<script lang="ts" setup>
import type { Product } from '~/dto';

defineProps<{
	products: Product[]
}>()

</script>