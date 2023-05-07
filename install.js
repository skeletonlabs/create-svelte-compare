#!/usr/bin/env node
import { createSkeleton, SkeletonOptions } from 'create-skeleton-app';
import { create } from 'create-svelte';
import { spawnSync } from 'node:child_process';


spawnSync("pnpm", ['up', '--latest'], {shell: true});

const so = new SkeletonOptions();
so.packageManager = 'pnpm';
so.name = 'skel-bare'
// so.quiet = true;
so.codeblocks = true;
createSkeleton(so);

// create-svelte
const skopts = {
	name: "",
	template: 'skeleton',
	types: 'typescript',
	prettier: true,
	eslint: true,
	playwright: false,
	vitest: true
};
create('sk-skeleton', skopts)
