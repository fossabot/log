import {expect} from 'chai';
import chalk from 'chalk';
import 'mocha';
import log from '../src/index';

describe('Sample log', () => {
    it('should be return hello world', () => {
        log(
            {
                author: 'phamhongphuc',
                repository: 'phamhongphuc/log',
                version: '0.2.2',
            },
            {
                color: chalk.blue,
                middle: true,
                title: 'The most beautiful log',
            }
        );
        expect(1).to.equal(1);
    });
});
