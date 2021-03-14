import { Instance, SnapshotOut, types } from 'mobx-state-tree';
/**
 * Model description here for TypeScript hints.
 */
export const SettingModel = types
    .model('Setting')
    .props({
        id: types.identifier,
        name: types.string,
        type: types.enumeration(['multiple', 'boolean']),
        options: types.optional(types.array(types.string), []),
        value: types.string || types.boolean,
    })
    .views((self) => ({
        get isSet() {
            return self.value !== null;
        },
    }))
    .actions((self) => ({
        setValue(value: string) {
            self.value = value;
        },
    }));

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type SettingType = Instance<typeof SettingModel>;
export interface Setting extends SettingType {}
type SettingSnapshotType = SnapshotOut<typeof SettingModel>;
export interface SettingSnapshot extends SettingSnapshotType {}
export const createSettingDefaultModel = () => types.optional(SettingModel, {});
