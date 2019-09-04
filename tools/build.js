#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

const DIST = 'dist';

fs.removeSync(path.join(process.cwd(), DIST));

fs.mkdirsSync(path.join(process.cwd(), DIST));

fs.writeJSONSync(path.join(process.cwd(), DIST, 'test.json'), {name: 'wannaksy', date: new Date()});

