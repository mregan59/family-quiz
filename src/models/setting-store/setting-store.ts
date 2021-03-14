import { Instance, SnapshotOut, types, flow } from 'mobx-state-tree';
import { SettingModel, SettingSnapshot, Setting } from '../setting';
import { withEnvironment } from '../extensions';
//import { GetSettingsResult } from '../../services/api';
/**
 * Model description here for TypeScript hints.
 */
export const SettingStoreModel = types
    .model('SettingStore')
    .props({
        settings: types.optional(types.array(SettingModel), []),
    })
    .extend(withEnvironment)
    .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
    .actions((self) => ({
        saveSettings: (settingsSnapshots: SettingSnapshot[]) => {
            const settingsModels: Setting[] = settingsSnapshots.map((c) =>
                SettingModel.create(c)
            ); // create model instances from the plain objects
            self.settings.replace(settingsModels); // Replace the existing data with the new data
        },
    }))
    .actions((self) => ({})); // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type SettingStoreType = Instance<typeof SettingStoreModel>;
export interface SettingStore extends SettingStoreType {}
type SettingStoreSnapshotType = SnapshotOut<typeof SettingStoreModel>;
export interface SettingStoreSnapshot extends SettingStoreSnapshotType {}
export const createSettingStoreDefaultModel = () =>
    types.optional(SettingStoreModel, {});
