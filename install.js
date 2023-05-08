#!/usr/bin/env node
import { createSkeleton, SkeletonOptions } from 'create-skeleton-app';
import { create } from 'create-svelte';
import { spawnSync } from 'node:child_process';
import { rmdirSync } from 'node:fs';

spawnSync("git", ['switch', 'skeleton-bare'], { shell: true });
try {
	rmdirSync('skeleton-bare', { recursive: true });
} catch (e) { }

spawnSync("pnpm", ['up', '--latest'], { shell: true });

const so = new SkeletonOptions();
so.packageManager = 'pnpm';
so.name = 'skeleton-bare'
// so.quiet = true;
so.codeblocks = true;
createSkeleton(so);
spawnSync("git", ['add', '--all'], { shell: true });
spawnSync("git", ['commit', '-m', Date.now().toString()], { shell: true });
spawnSync("git", ['push'], { shell: true });
// create-svelte
spawnSync("git", ['switch', 'sveltekit-skeleton'], { shell: true });
try {
	rmdirSync('sveltekit-skeleton', { recursive: true });
} catch (e) { }
spawnSync("pnpm", ['up', '--latest'], { shell: true });
const skopts = {
	name: "",
	template: 'skeleton',
	types: 'typescript',
	prettier: true,
	eslint: true,
	playwright: false,
	vitest: true
};
create('sveltekit-skeleton', skopts)
spawnSync("git", ['add', '--all'], { shell: true });
spawnSync("git", ['commit', '-m', Date.now().toString()], { shell: true });
spawnSync("git", ['push'], { shell: true });
spawnSync("git", ['switch', 'main'], { shell: true });