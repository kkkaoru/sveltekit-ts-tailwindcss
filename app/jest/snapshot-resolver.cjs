/**
 *
 * @param testPath Path of the test file being test3ed
 * @param snapshotExtension The extension for snapshots (.snap usually)
 */
const resolveSnapshotPath = (testPath, snapshotExtension) => {
  return testPath + snapshotExtension; //(i.e. some.test.js + '.snap')
};

/**
 *
 * @param snapshotFilePath The filename of the snapshot (i.e. some.test.js.snap)
 * @param snapshotExtension The extension for snapshots (.snap)
 */
const resolveTestPath = (snapshotFilePath, snapshotExtension) => {
  return snapshotFilePath.replace(snapshotExtension, '').replace('__snapshots__/', ''); //Remove the .snap
};

/* Used to validate resolveTestPath(resolveSnapshotPath( {this} )) */
const testPathForConsistencyCheck = 'some.test.js';

module.exports = {
  resolveSnapshotPath,
  resolveTestPath,
  testPathForConsistencyCheck,
};
