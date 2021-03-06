import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['gh-pages', 'web', 'docs']);
export default new DocsSource({
	id: 'main',
	name: 'Main library',
	global: 'upDB',
	repo: 'Up-Devs/up-devs.db',
	defaultTag: 'main',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot'),
	tagFilter: (tag: string) => semver.gte(tag, '9.0.0'),
});
