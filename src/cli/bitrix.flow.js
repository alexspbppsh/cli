import nodePath from 'path';
import {appRoot} from '../constants';
import createSymlink from '../utils/create-symlink';
import params from '../process/params';
import argv from '../process/argv';

const srcConfigPath = nodePath.resolve(appRoot, 'src/templates/.flowconfig');
const srcFlowTypedPath = nodePath.resolve(appRoot, 'src/templates/flow-typed');

export default function bitrixFlow({path} = params, {init} = argv) {
	if (init) {
		const currentDir = path;

		if (typeof currentDir !== 'string') {
			throw new Error('path or p not string');
		}

		const distFlowTypedPath = nodePath.resolve(currentDir, 'flow-typed');
		const distConfigPath = nodePath.resolve(currentDir, '.flowconfig');

		createSymlink(srcFlowTypedPath, distFlowTypedPath);
		createSymlink(srcConfigPath, distConfigPath);
	}
}