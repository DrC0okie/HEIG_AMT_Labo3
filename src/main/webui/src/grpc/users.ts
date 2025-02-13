// @generated by protobuf-ts 2.9.4 with parameter optimize_code_size
// @generated from protobuf file "users.proto" (package "users", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message users.UserName
 */
export interface UserName {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * @generated from protobuf message users.UsersList
 */
export interface UsersList {
    /**
     * @generated from protobuf field: repeated users.User users = 1;
     */
    users: User[];
}
/**
 * @generated from protobuf message users.User
 */
export interface User {
    /**
     * @generated from protobuf field: uint32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
}
/**
 * @generated from protobuf message users.UserChange
 */
export interface UserChange {
    /**
     * @generated from protobuf field: users.SessionAction action = 1;
     */
    action: SessionAction;
    /**
     * @generated from protobuf field: uint32 userId = 2;
     */
    userId: number;
    /**
     * @generated from protobuf field: string name = 3;
     */
    name: string;
}
/**
 * @generated from protobuf message users.UserSubscription
 */
export interface UserSubscription {
    /**
     * @generated from protobuf field: uint32 userId = 1;
     */
    userId: number;
}
/**
 * @generated from protobuf enum users.SessionAction
 */
export enum SessionAction {
    /**
     * @generated from protobuf enum value: ACTION_UNSPECIFIED = 0;
     */
    ACTION_UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: JOIN = 1;
     */
    JOIN = 1,
    /**
     * @generated from protobuf enum value: LEAVE = 2;
     */
    LEAVE = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class UserName$Type extends MessageType<UserName> {
    constructor() {
        super("users.UserName", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message users.UserName
 */
export const UserName = new UserName$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UsersList$Type extends MessageType<UsersList> {
    constructor() {
        super("users.UsersList", [
            { no: 1, name: "users", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => User }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message users.UsersList
 */
export const UsersList = new UsersList$Type();
// @generated message type with reflection information, may provide speed optimized methods
class User$Type extends MessageType<User> {
    constructor() {
        super("users.User", [
            { no: 1, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message users.User
 */
export const User = new User$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UserChange$Type extends MessageType<UserChange> {
    constructor() {
        super("users.UserChange", [
            { no: 1, name: "action", kind: "enum", T: () => ["users.SessionAction", SessionAction] },
            { no: 2, name: "userId", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message users.UserChange
 */
export const UserChange = new UserChange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UserSubscription$Type extends MessageType<UserSubscription> {
    constructor() {
        super("users.UserSubscription", [
            { no: 1, name: "userId", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message users.UserSubscription
 */
export const UserSubscription = new UserSubscription$Type();
/**
 * @generated ServiceType for protobuf service users.UsersService
 */
export const UsersService = new ServiceType("users.UsersService", [
    { name: "Join", options: {}, I: UserName, O: UsersList },
    { name: "GetUsersEvents", serverStreaming: true, options: {}, I: UserSubscription, O: UserChange }
]);
