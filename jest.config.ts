import type { Config } from 'jest'

export default async (): Promise<Config> => {
    return {
        clearMocks: true,
        verbose: true,
        collectCoverage: true,
        coverageDirectory: 'coverage',
        preset: 'ts-jest',
        testEnvironment: 'jsdom',
        globalTeardown: './src/tests/teardown.ts',
        testResultsProcessor: 'jest-json-reporter',
        modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],
        testMatch: [
            '**/__tests__/**/*.ts?(x)',
            '**/?(*.)+(spec|test).ts?(x)',
        ],
        moduleNameMapper: {
            '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
        }
    }
}