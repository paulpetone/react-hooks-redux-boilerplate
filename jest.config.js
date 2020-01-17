module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jestConfig/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    '^@components(.*)$': '<rootDir>src/components$1',
    '^@pageComponents(.*)$': '<rootDir>src/components/pageComponents$1',
    '^@pageHooks(.*)$': '<rootDir>src/hooks/pageHooks$1',
    '^@actions(.*)$': '<rootDir>src/store/actions$1',
    '^@hooks(.*)$': '<rootDir>src/hooks$1',
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/jestConfig/loadershim.js`],
  setupFilesAfterEnv: [`<rootDir>/jestConfig/jest.setup.js`],
}
