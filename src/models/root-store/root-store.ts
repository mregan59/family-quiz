import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { QuestionStoreModel } from '../question-store';
import { SettingStoreModel } from '../setting-store';
/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
    questionStore: QuestionStoreModel,
    //settingStore: SettingStoreModel,
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
