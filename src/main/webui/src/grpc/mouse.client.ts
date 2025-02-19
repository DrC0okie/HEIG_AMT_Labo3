// @generated by protobuf-ts 2.9.4 with parameter optimize_code_size
// @generated from protobuf file "mouse.proto" (package "mouse", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { MouseService } from "./mouse";
import type { Empty } from "./google/protobuf/empty";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MousePosition } from "./mouse";
import type { MouseSubscription } from "./mouse";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service mouse.MouseService
 */
export interface IMouseServiceClient {
    /**
     * Server-side streaming to broadcast mouse positions to all clients
     *
     * @generated from protobuf rpc: GetMouseUpdates(mouse.MouseSubscription) returns (stream mouse.MousePosition);
     */
    getMouseUpdates(input: MouseSubscription, options?: RpcOptions): ServerStreamingCall<MouseSubscription, MousePosition>;
    /**
     * Unary sending to let clients send their mouse positions when they move
     *
     * @generated from protobuf rpc: SendMousePosition(mouse.MousePosition) returns (google.protobuf.Empty);
     */
    sendMousePosition(input: MousePosition, options?: RpcOptions): UnaryCall<MousePosition, Empty>;
}
/**
 * @generated from protobuf service mouse.MouseService
 */
export class MouseServiceClient implements IMouseServiceClient, ServiceInfo {
    typeName = MouseService.typeName;
    methods = MouseService.methods;
    options = MouseService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Server-side streaming to broadcast mouse positions to all clients
     *
     * @generated from protobuf rpc: GetMouseUpdates(mouse.MouseSubscription) returns (stream mouse.MousePosition);
     */
    getMouseUpdates(input: MouseSubscription, options?: RpcOptions): ServerStreamingCall<MouseSubscription, MousePosition> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MouseSubscription, MousePosition>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * Unary sending to let clients send their mouse positions when they move
     *
     * @generated from protobuf rpc: SendMousePosition(mouse.MousePosition) returns (google.protobuf.Empty);
     */
    sendMousePosition(input: MousePosition, options?: RpcOptions): UnaryCall<MousePosition, Empty> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<MousePosition, Empty>("unary", this._transport, method, opt, input);
    }
}
