'use strict';

var _codemirror = require('codemirror');

var _codemirror2 = _interopRequireDefault(_codemirror);

require('codemirror/mode/clike/clike.js');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function keyword(type) {
	return {
		type: type,
		style: 'keyword'
	};
} /* eslint-disable  */


var extra_keywords = ['__device__', '__global__', '__host__', '__constant__', '__shared__', '__inline__', '__align__', '__thread____import__', '__export__', '__location__'];
var cuda_api_calls = ['cudaDeviceReset', 'cudaDeviceSynchronize', 'cudaDeviceSetLimit', 'cudaDeviceGetLimit', 'cudaDeviceGetCacheConfig', 'cudaDeviceGetStreamPriorityRange', 'cudaDeviceSetCacheConfig', 'cudaDeviceGetSharedMemConfig', 'cudaDeviceSetSharedMemConfig', 'cudaDeviceGetByPCIBusId', 'cudaDeviceGetPCIBusId', 'cudaIpcGetEventHandle', 'cudaIpcOpenEventHandle', 'cudaIpcGetMemHandle', 'cudaIpcOpenMemHandle', 'cudaIpcCloseMemHandle', 'cudaThreadExit', 'cudaThreadSynchronize', 'cudaThreadSetLimit', 'cudaThreadGetLimit', 'cudaThreadGetCacheConfig', 'cudaThreadSetCacheConfig', 'cudaGetLastError', 'cudaPeekAtLastError', 'cudaGetErrorName', 'cudaGetErrorString', 'cudaGetDeviceCount', 'cudaGetDeviceProperties', 'cudaDeviceGetAttribute', 'cudaChooseDevice', 'cudaSetDevice', 'cudaGetDevice', 'cudaSetValidDevices', 'cudaSetDeviceFlags', 'cudaGetDeviceFlags', 'cudaStreamCreate', 'cudaStreamCreateWithFlags', 'cudaStreamCreateWithPriority', 'cudaStreamGetPriority', 'cudaStreamGetFlags', 'cudaStreamDestroy', 'cudaStreamWaitEvent', 'cudaStreamAddCallback', 'cudaStreamSynchronize', 'cudaStreamQuery', 'cudaStreamAttachMemAsync', 'cudaEventCreate', 'cudaEventCreateWithFlags', 'cudaEventRecord', 'cudaEventQuery', 'cudaEventSynchronize', 'cudaEventDestroy', 'cudaEventElapsedTime', 'cudaLaunchKernel', 'cudaFuncSetCacheConfig', 'cudaFuncSetSharedMemConfig', 'cudaFuncGetAttributes', 'cudaSetDoubleForDevice', 'cudaSetDoubleForHost', 'cudaOccupancyMaxActiveBlocksPerMultiprocessor', 'cudaOccupancyMaxActiveBlocksPerMultiprocessorWithFlags', 'cudaConfigureCall', 'cudaSetupArgument', 'cudaLaunch', 'cudaMallocManaged', 'cudaMalloc', 'cudaMallocHost', 'cudaMallocPitch', 'cudaMallocArray', 'cudaFree', 'cudaFreeHost', 'cudaFreeArray', 'cudaFreeMipmappedArray', 'cudaHostAlloc', 'cudaHostRegister', 'cudaHostUnregister', 'cudaHostGetDevicePointer', 'cudaHostGetFlags', 'cudaMalloc3D', 'cudaMalloc3DArray', 'cudaMallocMipmappedArray', 'cudaGetMipmappedArrayLevel', 'cudaMemcpy3D', 'cudaMemcpy3DPeer', 'cudaMemcpy3DAsync', 'cudaMemcpy3DPeerAsync', 'cudaMemGetInfo', 'cudaArrayGetInfo', 'cudaMemcpy', 'cudaMemcpyPeer', 'cudaMemcpyToArray', 'cudaMemcpyFromArray', 'cudaMemcpyArrayToArray', 'cudaMemcpy2D', 'cudaMemcpy2DToArray', 'cudaMemcpy2DFromArray', 'cudaMemcpy2DArrayToArray', 'cudaMemcpyToSymbol', 'cudaMemcpyFromSymbol', 'cudaMemcpyAsync', 'cudaMemcpyPeerAsync', 'cudaMemcpyToArrayAsync', 'cudaMemcpyFromArrayAsync', 'cudaMemcpy2DAsync', 'cudaMemcpy2DToArrayAsync', 'cudaMemcpy2DFromArrayAsync', 'cudaMemcpyToSymbolAsync', 'cudaMemcpyFromSymbolAsync', 'cudaMemset', 'cudaMemset2D', 'cudaMemset3D', 'cudaMemsetAsync', 'cudaMemset2DAsync', 'cudaMemset3DAsync', 'cudaGetSymbolAddress', 'cudaGetSymbolSize', 'cudaPointerGetAttributes', 'cudaDeviceCanAccessPeer', 'cudaDeviceEnablePeerAccess', 'cudaDeviceDisablePeerAccess', 'cudaGraphicsUnregisterResource', 'cudaGraphicsResourceSetMapFlags', 'cudaGraphicsMapResources', 'cudaGraphicsUnmapResources', 'cudaGraphicsResourceGetMappedPointer', 'cudaGraphicsSubResourceGetMappedArray', 'cudaGraphicsResourceGetMappedMipmappedArray', 'cudaGetChannelDesc', 'cudaCreateChannelDesc', 'cudaBindTexture', 'cudaBindTexture2D', 'cudaBindTextureToArray', 'cudaBindTextureToMipmappedArray', 'cudaUnbindTexture', 'cudaGetTextureAlignmentOffset', 'cudaGetTextureReference', 'cudaBindSurfaceToArray', 'cudaGetSurfaceReference', 'cudaCreateTextureObject', 'cudaDestroyTextureObject', 'cudaGetTextureObjectResourceDesc', 'cudaGetTextureObjectTextureDesc', 'cudaGetTextureObjectResourceViewDesc', 'cudaCreateSurfaceObject', 'cudaDestroySurfaceObject', 'cudaGetSurfaceObjectResourceDesc', 'cudaDriverGetVersion', 'cudaRuntimeGetVersion', 'cudaGetExportTable', 'cudaMemcpy', 'cudaMemcpyToSymbol', 'cudaMemcpyFromSymbol', 'cudaMemcpy2D', 'cudaMemcpyToArray', 'cudaMemcpy2DToArray', 'cudaMemcpyFromArray', 'cudaMemcpy2DFromArray', 'cudaMemcpyArrayToArray', 'cudaMemcpy2DArrayToArray', 'cudaMemcpy3D', 'cudaMemcpy3DPeer', 'cudaMemset', 'cudaMemset2D', 'cudaMemset3D', 'cudaMemcpyAsync', 'cudaMemcpyToSymbolAsync', 'cudaMemcpyFromSymbolAsync', 'cudaMemcpy2DAsync', 'cudaMemcpyToArrayAsync', 'cudaMemcpy2DToArrayAsync', 'cudaMemcpyFromArrayAsync', 'cudaMemcpy2DFromArrayAsync', 'cudaMemcpy3DAsync', 'cudaMemcpy3DPeerAsync', 'cudaMemsetAsync', 'cudaMemset2DAsync', 'cudaMemset3DAsync', 'cudaStreamQuery', 'cudaStreamGetFlags', 'cudaStreamGetPriority', 'cudaEventRecord', 'cudaStreamWaitEvent', 'cudaStreamAddCallback', 'cudaStreamAttachMemAsync', 'cudaStreamSynchronize', 'cudaLaunch', 'cudaLaunchKernel'];
var wg_api_calls = ['wgLog', 'wbArg_read', 'wbTime_start', 'wbTime_stop'];
var extra_types = ['char1', 'char2', 'char3', 'char4', 'uchar1', 'uchar2', 'uchar3', 'uchar4', 'short1', 'short2', 'short3', 'short4', 'ushort1', 'ushort2', 'ushort3', 'ushort4', 'int1', 'int2', 'int3', 'int4', 'uint1', 'uint2', 'uint3', 'uint4', 'long1', 'long2', 'long3', 'long4', 'ulong1', 'ulong2', 'ulong3', 'ulong4', 'float1', 'float2', 'float3', 'float4', 'ufloat1', 'ufloat2', 'ufloat3', 'ufloat4', 'dim3', 'texture', 'textureReference', 'cudaError_t', 'cudaDeviceProp', 'cudaMemcpyKind'].concat(cuda_api_calls, wg_api_calls);

var baseMode = _codemirror2.default.mimeModes['text/x-c++src'];
var keywords = _lodash2.default.fromPairs(_lodash2.default.map(_lodash2.default.concat(_lodash2.default.keys(baseMode.keywords), extra_keywords), function (elem) {
	return [elem, true];
}));
var types = _lodash2.default.fromPairs(_lodash2.default.map(_lodash2.default.concat(_lodash2.default.keys(baseMode.types), extra_types), function (elem) {
	return [elem, true];
}));
_codemirror2.default.defineMIME('text/x-cuda-src', Object.assign({}, baseMode, {
	keywords: keywords,
	types: types
}));
//# sourceMappingURL=cuda.js.map