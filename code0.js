gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDBlueButtonWithShadowObjects1= [];
gdjs.menuCode.GDBlueButtonWithShadowObjects2= [];
gdjs.menuCode.GDDinoObjects1= [];
gdjs.menuCode.GDDinoObjects2= [];
gdjs.menuCode.GDNewTiledSpriteObjects1= [];
gdjs.menuCode.GDNewTiledSpriteObjects2= [];
gdjs.menuCode.GDareariesgoObjects1= [];
gdjs.menuCode.GDareariesgoObjects2= [];
gdjs.menuCode.GDtrigger_9595abajoObjects1= [];
gdjs.menuCode.GDtrigger_9595abajoObjects2= [];
gdjs.menuCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.menuCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.menuCode.GDtrigger_9595arribaObjects1= [];
gdjs.menuCode.GDtrigger_9595arribaObjects2= [];
gdjs.menuCode.GDtrigger_9595derechaObjects1= [];
gdjs.menuCode.GDtrigger_9595derechaObjects2= [];
gdjs.menuCode.GDCoin_9595GoldObjects1= [];
gdjs.menuCode.GDCoin_9595GoldObjects2= [];
gdjs.menuCode.GDSUBVIDATITULOObjects1= [];
gdjs.menuCode.GDSUBVIDATITULOObjects2= [];
gdjs.menuCode.GDsubvidaObjects1= [];
gdjs.menuCode.GDsubvidaObjects2= [];
gdjs.menuCode.GDtxtmonedaObjects1= [];
gdjs.menuCode.GDtxtmonedaObjects2= [];
gdjs.menuCode.GDdinotxtObjects1= [];
gdjs.menuCode.GDdinotxtObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.menuCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDBlueButtonWithShadowObjects1[k] = gdjs.menuCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena 1", true);
}
elseEventsChainSatisfied = true;
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.menuCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.menuCode.GDDinoObjects1.length = 0;
gdjs.menuCode.GDDinoObjects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDareariesgoObjects1.length = 0;
gdjs.menuCode.GDareariesgoObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.menuCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.menuCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.menuCode.GDSUBVIDATITULOObjects1.length = 0;
gdjs.menuCode.GDSUBVIDATITULOObjects2.length = 0;
gdjs.menuCode.GDsubvidaObjects1.length = 0;
gdjs.menuCode.GDsubvidaObjects2.length = 0;
gdjs.menuCode.GDtxtmonedaObjects1.length = 0;
gdjs.menuCode.GDtxtmonedaObjects2.length = 0;
gdjs.menuCode.GDdinotxtObjects1.length = 0;
gdjs.menuCode.GDdinotxtObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.menuCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.menuCode.GDDinoObjects1.length = 0;
gdjs.menuCode.GDDinoObjects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDareariesgoObjects1.length = 0;
gdjs.menuCode.GDareariesgoObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.menuCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.menuCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.menuCode.GDSUBVIDATITULOObjects1.length = 0;
gdjs.menuCode.GDSUBVIDATITULOObjects2.length = 0;
gdjs.menuCode.GDsubvidaObjects1.length = 0;
gdjs.menuCode.GDsubvidaObjects2.length = 0;
gdjs.menuCode.GDtxtmonedaObjects1.length = 0;
gdjs.menuCode.GDtxtmonedaObjects2.length = 0;
gdjs.menuCode.GDdinotxtObjects1.length = 0;
gdjs.menuCode.GDdinotxtObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
