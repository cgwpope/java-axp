(function(){
var $gwt_version = "2.0.3";
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $strongName = '56BCC4E72197BC99A1CFB6E1AAC9A5CC';
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
$stats && $stats({moduleName:'alternateburndown',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});
var $intern_3 = '', $intern_82 = ' ', $intern_13 = '&', $intern_22 = '(', $intern_4 = ',', $intern_86 = ', Size: ', $intern_15 = '//', $intern_30 = '/>', $intern_16 = '/jsapi?', $intern_2 = '1', $intern_7 = '127.0.0.1:8080', $intern_25 = ':', $intern_29 = '<', $intern_78 = "<BUTTON type='button'><\/BUTTON>", $intern_9 = 'ABQIAAAAG8LzhtshQCjpSshU_uJjmxTBfUk9TZrBRaIteybtnU2KziHEpRQvhPNTjo7DMczjrRD3yBPRJ_BSQQ', $intern_8 = 'ABQIAAAAG8LzhtshQCjpSshU_uJjmxTwM0brOpm-All5BF6PoaKBxRWWERTZER2lJ4GnsG8nvhKLOQ20degaEQ', $intern_33 = 'Add not supported on this collection', $intern_84 = 'Add not supported on this list', $intern_73 = 'Cannot set a new parent without first clearing the old parent', $intern_55 = 'DOMMouseScroll', $intern_32 = 'Hello World!', $intern_85 = 'Index: ', $intern_83 = 'Must call next() before remove().', $intern_77 = 'One or more exceptions caught, see full set in AttachDetachException#getCauses', $intern_87 = 'Remove not supported on this list', $intern_70 = "Should only call onAttach when the widget is detached from the browser's document", $intern_71 = "Should only call onDetach when the widget is attached to the browser's document", $intern_1 = 'SimpleGadget', $intern_72 = "This widget's parent does not implement HasWidgets", $intern_26 = 'Unknown', $intern_27 = 'Unknown source', $intern_0 = '_table_query_url', $intern_5 = 'ajaxKeys', $intern_37 = 'alternateburndown.client.AlternateBurndownGadget', $intern_24 = 'anonymous', $intern_39 = 'blur', $intern_17 = 'callback=__gwt_AjaxLoader_onLoad', $intern_40 = 'change', $intern_79 = 'className', $intern_31 = 'click', $intern_56 = 'contextmenu', $intern_41 = 'dblclick', $intern_28 = 'div', $intern_53 = 'error', $intern_42 = 'focus', $intern_23 = 'function', $intern_38 = 'function __gwt_initWindowCloseHandler(beforeunload, unload) {\r\n  var wnd = window\r\n  , oldOnBeforeUnload = wnd.onbeforeunload\r\n  , oldOnUnload = wnd.onunload;\r\n  \r\n  wnd.onbeforeunload = function(evt) {\r\n    var ret, oldRet;\r\n    try {\r\n      ret = beforeunload();\r\n    } finally {\r\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\r\n    }\r\n    // Avoid returning null as IE6 will coerce it into a string.\r\n    // Ensure that "" gets returned properly.\r\n    if (ret != null) {\r\n      return ret;\r\n    }\r\n    if (oldRet != null) {\r\n      return oldRet;\r\n    }\r\n    // returns undefined.\r\n  };\r\n  \r\n  wnd.onunload = function(evt) {\r\n    try {\r\n      unload();\r\n    } finally {\r\n      oldOnUnload && oldOnUnload(evt);\r\n      wnd.onresize = null;\r\n      wnd.onscroll = null;\r\n      wnd.onbeforeunload = null;\r\n      wnd.onunload = null;\r\n    }\r\n  };\r\n  \r\n  // Remove the reference once we\'ve initialize the handler\r\n  wnd.__gwt_initWindowCloseHandler = undefined;\r\n}\r\n', $intern_20 = 'google', $intern_80 = 'gwt-Button', $intern_11 = 'http:', $intern_10 = 'https:', $intern_12 = 'key=', $intern_43 = 'keydown', $intern_44 = 'keypress', $intern_45 = 'keyup', $intern_74 = 'left', $intern_21 = 'load', $intern_6 = 'localhost:8080', $intern_46 = 'losecapture', $intern_35 = 'moduleStartup', $intern_47 = 'mousedown', $intern_48 = 'mousemove', $intern_49 = 'mouseout', $intern_50 = 'mouseover', $intern_51 = 'mouseup', $intern_54 = 'mousewheel', $intern_36 = 'onModuleLoadStart', $intern_67 = 'onblur', $intern_58 = 'onclick', $intern_69 = 'oncontextmenu', $intern_68 = 'ondblclick', $intern_66 = 'onfocus', $intern_63 = 'onkeydown', $intern_64 = 'onkeypress', $intern_65 = 'onkeyup', $intern_59 = 'onmousedown', $intern_61 = 'onmousemove', $intern_60 = 'onmouseup', $intern_62 = 'onmousewheel', $intern_57 = 'paste', $intern_76 = 'position', $intern_18 = 'script', $intern_52 = 'scroll', $intern_34 = 'startup', $intern_19 = 'text/javascript', $intern_75 = 'top', $intern_81 = 'visualization', $intern_14 = 'www.google.com';
var _;
function nullMethod(){
}

function java_lang_Object_equals__Ljava_lang_Object_2Z(other){
  return this === (other == null?null:other);
}

function java_lang_Object_hashCode__I(){
  return this.$H || (this.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}

function java_lang_Object(){
}

_ = java_lang_Object.prototype = {};
_.equals__Ljava_lang_Object_2Z$ = java_lang_Object_equals__Ljava_lang_Object_2Z;
_.hashCode__I$ = java_lang_Object_hashCode__I;
_.java_lang_Object_typeMarker$ = nullMethod;
_.java_lang_Object_typeId$ = 1;
function com_google_gwt_gadgets_client_Gadget(){
}

_ = com_google_gwt_gadgets_client_Gadget.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function alternateburndown_client_AlternateBurndownGadget_$handleVisualizationLoad__Lalternateburndown_client_AlternateBurndownGadget_2Lalternateburndown_client_VisualizationGadgetPreferences_2V(this$static, preferences){
  var q, com_google_gwt_gadgets_client_impl_PreferencesUtil_$getString__Lcom_google_gwt_gadgets_client_impl_PreferencesUtil_2Ljava_lang_String_2Ljava_lang_String_2_maybeString_0;
  q = new $wnd.google.visualization.Query((com_google_gwt_gadgets_client_impl_PreferencesUtil_$getString__Lcom_google_gwt_gadgets_client_impl_PreferencesUtil_2Ljava_lang_String_2Ljava_lang_String_2_maybeString_0 = preferences.alternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl__1_1_1table_1query_1url.com_google_gwt_gadgets_client_UserPreferences$Preference_prefs.getString($intern_0) , com_google_gwt_gadgets_client_impl_PreferencesUtil_$getString__Lcom_google_gwt_gadgets_client_impl_PreferencesUtil_2Ljava_lang_String_2Ljava_lang_String_2_maybeString_0 == undefined?null:com_google_gwt_gadgets_client_impl_PreferencesUtil_$getString__Lcom_google_gwt_gadgets_client_impl_PreferencesUtil_2Ljava_lang_String_2Ljava_lang_String_2_maybeString_0));
  com_google_gwt_visualization_client_Query_$send__Lcom_google_gwt_visualization_client_Query_2Lcom_google_gwt_visualization_client_Query$Callback_2V(q, this$static);
}

function alternateburndown_client_AlternateBurndownGadget_$init__Lalternateburndown_client_AlternateBurndownGadget_2Lalternateburndown_client_VisualizationGadgetPreferences_2V(this$static, preferences){
  var onLoadCallback;
  this$static.alternateburndown_client_AlternateBurndownGadget_mSimpleButton = com_google_gwt_user_client_ui_Button_$Button__Lcom_google_gwt_user_client_ui_Button_2Ljava_lang_String_2Lcom_google_gwt_user_client_ui_Button_2(new com_google_gwt_user_client_ui_Button, $intern_1);
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static.alternateburndown_client_AlternateBurndownGadget_mSimpleButton, new alternateburndown_client_AlternateBurndownGadget$1, (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(null)), this$static.alternateburndown_client_AlternateBurndownGadget_mSimpleButton);
  onLoadCallback = alternateburndown_client_AlternateBurndownGadget$2_$AlternateBurndownGadget$2__Lalternateburndown_client_AlternateBurndownGadget$2_2Lalternateburndown_client_AlternateBurndownGadget$2_2(new alternateburndown_client_AlternateBurndownGadget$2, this$static, preferences);
  com_google_gwt_visualization_client_VisualizationUtils_loadVisualizationApi__Ljava_lang_String_2Ljava_lang_Runnable_2Lcom_google_gwt_core_client_JsArrayString_2V($intern_2, onLoadCallback, com_google_gwt_ajaxloader_client_ArrayHelper_toJsArrayString___3Ljava_lang_String_2Lcom_google_gwt_core_client_JsArrayString_2(com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2IILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit, 65, 1, [])));
}

function alternateburndown_client_AlternateBurndownGadget_onResponse__Lcom_google_gwt_visualization_client_QueryResponse_2V(response){
  var data, i;
  data = $intern_3;
  for (i = 0; i < response.getDataTable().getNumberOfRows(); ++i) {
    data += response.getDataTable().getFormattedValue(i, 0) + $intern_4;
  }
  (com_google_gwt_dom_client_DOMImpl_$clinit__V() , this.alternateburndown_client_AlternateBurndownGadget_mSimpleButton.com_google_gwt_user_client_ui_UIObject_element).innerText = data || $intern_3;
}

function alternateburndown_client_AlternateBurndownGadget(){
}

_ = alternateburndown_client_AlternateBurndownGadget.prototype = new com_google_gwt_gadgets_client_Gadget;
_.onResponse__Lcom_google_gwt_visualization_client_QueryResponse_2V = alternateburndown_client_AlternateBurndownGadget_onResponse__Lcom_google_gwt_visualization_client_QueryResponse_2V;
_.java_lang_Object_typeId$ = 0;
_.alternateburndown_client_AlternateBurndownGadget_mSimpleButton = null;
function alternateburndown_client_AlternateBurndownGadget$1(){
}

_ = alternateburndown_client_AlternateBurndownGadget$1.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 3;
function alternateburndown_client_AlternateBurndownGadget$2_$AlternateBurndownGadget$2__Lalternateburndown_client_AlternateBurndownGadget$2_2Lalternateburndown_client_AlternateBurndownGadget$2_2(this$static, this$0, val$preferences){
  this$static.alternateburndown_client_AlternateBurndownGadget$2_this$0 = this$0;
  this$static.alternateburndown_client_AlternateBurndownGadget$2_val$preferences = val$preferences;
  return this$static;
}

function alternateburndown_client_AlternateBurndownGadget$2_run__V(){
  alternateburndown_client_AlternateBurndownGadget_$handleVisualizationLoad__Lalternateburndown_client_AlternateBurndownGadget_2Lalternateburndown_client_VisualizationGadgetPreferences_2V(this.alternateburndown_client_AlternateBurndownGadget$2_this$0, this.alternateburndown_client_AlternateBurndownGadget$2_val$preferences);
}

function alternateburndown_client_AlternateBurndownGadget$2(){
}

_ = alternateburndown_client_AlternateBurndownGadget$2.prototype = new java_lang_Object;
_.run__V = alternateburndown_client_AlternateBurndownGadget$2_run__V;
_.java_lang_Object_typeId$ = 4;
_.alternateburndown_client_AlternateBurndownGadget$2_this$0 = null;
_.alternateburndown_client_AlternateBurndownGadget$2_val$preferences = null;
function alternateburndown_client_AlternateBurndownGadgetGadgetImpl_$AlternateBurndownGadgetGadgetImpl__Lalternateburndown_client_AlternateBurndownGadgetGadgetImpl_2Lalternateburndown_client_AlternateBurndownGadgetGadgetImpl_2(this$static){
  alternateburndown_client_AlternateBurndownGadget_$init__Lalternateburndown_client_AlternateBurndownGadget_2Lalternateburndown_client_VisualizationGadgetPreferences_2V(this$static, alternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl_$VisualizationGadgetPreferencesUserPreferencesImpl__Lalternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl_2Lalternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl_2(new alternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl));
  return this$static;
}

function alternateburndown_client_AlternateBurndownGadgetGadgetImpl(){
}

_ = alternateburndown_client_AlternateBurndownGadgetGadgetImpl.prototype = new alternateburndown_client_AlternateBurndownGadget;
_.java_lang_Object_typeId$ = 0;
function alternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl_$VisualizationGadgetPreferencesUserPreferencesImpl__Lalternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl_2Lalternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl_2(this$static){
  this$static.alternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl__1_1_1table_1query_1url = alternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl$1_$VisualizationGadgetPreferencesUserPreferencesImpl$1__Lalternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl$1_2Lalternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl$1_2(new alternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl$1);
  return this$static;
}

function alternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl(){
}

_ = alternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_gadgets_client_UserPreferences$Preference(){
}

_ = com_google_gwt_gadgets_client_UserPreferences$Preference.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_gadgets_client_StringPreference(){
}

_ = com_google_gwt_gadgets_client_StringPreference.prototype = new com_google_gwt_gadgets_client_UserPreferences$Preference;
_.java_lang_Object_typeId$ = 0;
function alternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl$1_$VisualizationGadgetPreferencesUserPreferencesImpl$1__Lalternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl$1_2Lalternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl$1_2(this$static){
  this$static.com_google_gwt_gadgets_client_UserPreferences$Preference_prefs = new $wnd.gadgets.Prefs;
  return this$static;
}

function alternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl$1(){
}

_ = alternateburndown_client_VisualizationGadgetPreferencesUserPreferencesImpl$1.prototype = new com_google_gwt_gadgets_client_StringPreference;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_ajaxloader_client_AjaxKeyConstants_1_$AjaxKeyConstants_1__Lcom_google_gwt_ajaxloader_client_AjaxKeyConstants_1_2Lcom_google_gwt_ajaxloader_client_AjaxKeyConstants_1_2(this$static){
  this$static.com_google_gwt_ajaxloader_client_AjaxKeyConstants_1_cache = java_util_HashMap_$HashMap__Ljava_util_HashMap_2Ljava_util_HashMap_2(new java_util_HashMap);
  return this$static;
}

function com_google_gwt_ajaxloader_client_AjaxKeyConstants_1_$ajaxKeys__Lcom_google_gwt_ajaxloader_client_AjaxKeyConstants_1_2Ljava_util_Map_2(this$static){
  var args;
  args = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_ajaxloader_client_AjaxKeyConstants_1_cache, $intern_5), 2);
  if (!args) {
    args = com_google_gwt_i18n_client_impl_ConstantMap_$ConstantMap__Lcom_google_gwt_i18n_client_impl_ConstantMap_2_3Ljava_lang_String_2_3Ljava_lang_String_2Lcom_google_gwt_i18n_client_impl_ConstantMap_2(new com_google_gwt_i18n_client_impl_ConstantMap, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2IILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit, 65, 1, [$intern_6, $intern_7]), com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2IILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit, 65, 1, [$intern_8, $intern_9]));
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_ajaxloader_client_AjaxKeyConstants_1_cache, $intern_5, args);
  }
  return args;
}

function com_google_gwt_ajaxloader_client_AjaxKeyConstants_1(){
}

_ = com_google_gwt_ajaxloader_client_AjaxKeyConstants_1.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_ajaxloader_client_AjaxKeyRepository_$clinit__V(){
  com_google_gwt_ajaxloader_client_AjaxKeyRepository_$clinit__V = nullMethod;
  com_google_gwt_ajaxloader_client_AjaxKeyRepository_keys = com_google_gwt_ajaxloader_client_AjaxKeyConstants_1_$AjaxKeyConstants_1__Lcom_google_gwt_ajaxloader_client_AjaxKeyConstants_1_2Lcom_google_gwt_ajaxloader_client_AjaxKeyConstants_1_2(new com_google_gwt_ajaxloader_client_AjaxKeyConstants_1);
}

var com_google_gwt_ajaxloader_client_AjaxKeyRepository_keys;
function com_google_gwt_ajaxloader_client_AjaxLoader_$clinit__V(){
  com_google_gwt_ajaxloader_client_AjaxLoader_$clinit__V = nullMethod;
  com_google_gwt_ajaxloader_client_AjaxLoader_queuedApiLoads = java_util_Vector_$Vector__Ljava_util_Vector_2Ljava_util_Vector_2(new java_util_Vector);
}

function com_google_gwt_ajaxloader_client_AjaxLoader_getProtocol__Ljava_lang_String_2(){
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($wnd.location.protocol, $intern_10)) {
    return $intern_10;
  }
  return $intern_11;
}

function com_google_gwt_ajaxloader_client_AjaxLoader_init__Ljava_lang_String_2Ljava_lang_String_2V(apiKey, hostname){
  var alreadyLoaded;
  if (com_google_gwt_ajaxloader_client_AjaxLoader_initialized) {
    return;
  }
  apiKey == null && (apiKey = (com_google_gwt_ajaxloader_client_AjaxKeyRepository_$clinit__V() , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(com_google_gwt_ajaxloader_client_AjaxKeyConstants_1_$ajaxKeys__Lcom_google_gwt_ajaxloader_client_AjaxKeyConstants_1_2Ljava_util_Map_2(com_google_gwt_ajaxloader_client_AjaxKeyRepository_keys).get__Ljava_lang_Object_2Ljava_lang_Object_2($wnd.location.host), 1)));
  alreadyLoaded = com_google_gwt_ajaxloader_client_AjaxLoader_injectJsapi__Ljava_lang_String_2Ljava_lang_String_2Z(apiKey, hostname);
  alreadyLoaded && (com_google_gwt_ajaxloader_client_AjaxLoader_loaded = true);
  com_google_gwt_ajaxloader_client_AjaxLoader_initialized = true;
}

function com_google_gwt_ajaxloader_client_AjaxLoader_injectJsapi__Ljava_lang_String_2Ljava_lang_String_2Z(apiKey, hostname){
  var alreadyLoaded, doc, key, script, src;
  if (com_google_gwt_ajaxloader_client_AjaxLoader_alreadyInjected) {
    return true;
  }
  alreadyLoaded = com_google_gwt_ajaxloader_client_AjaxLoader_nativeCreateCallback__Z();
  com_google_gwt_ajaxloader_client_AjaxLoader_alreadyInjected = true;
  if (alreadyLoaded) {
    return true;
  }
  doc = $doc;
  key = apiKey == null?$intern_3:$intern_12 + apiKey + $intern_13;
  hostname = hostname == null?$intern_14:hostname;
  src = com_google_gwt_ajaxloader_client_AjaxLoader_getProtocol__Ljava_lang_String_2() + $intern_15 + hostname + $intern_16 + key + $intern_17;
  script = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__V() , doc), $intern_18);
  script.src = src;
  script.type = $intern_19;
  doc.body.appendChild(script);
  return false;
}

function com_google_gwt_ajaxloader_client_AjaxLoader_loadApi__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Runnable_2Lcom_google_gwt_ajaxloader_client_AjaxLoader$AjaxLoaderOptions_2V(api, version, onLoad, settings){
  com_google_gwt_ajaxloader_client_AjaxLoader_$clinit__V();
  var apiLoad, copyOfSettings;
  com_google_gwt_ajaxloader_client_AjaxLoader_init__Ljava_lang_String_2Ljava_lang_String_2V(null, null);
  !settings && (settings = {});
  com_google_gwt_ajaxloader_client_AjaxLoader$AjaxLoaderOptions_$setCallback__Lcom_google_gwt_ajaxloader_client_AjaxLoader$AjaxLoaderOptions_2Ljava_lang_Runnable_2V(settings, onLoad);
  copyOfSettings = settings;
  apiLoad = com_google_gwt_ajaxloader_client_AjaxLoader$1_$AjaxLoader$1__Lcom_google_gwt_ajaxloader_client_AjaxLoader$1_2Lcom_google_gwt_ajaxloader_client_AjaxLoader$1_2(new com_google_gwt_ajaxloader_client_AjaxLoader$1, api, version, copyOfSettings);
  com_google_gwt_ajaxloader_client_AjaxLoader_loaded?($wnd.google.load(apiLoad.com_google_gwt_ajaxloader_client_AjaxLoader$1_val$api, apiLoad.com_google_gwt_ajaxloader_client_AjaxLoader$1_val$version, apiLoad.com_google_gwt_ajaxloader_client_AjaxLoader$1_val$copyOfSettings) , undefined):java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(com_google_gwt_ajaxloader_client_AjaxLoader_queuedApiLoads.java_util_Vector_arrayList, apiLoad);
}

function com_google_gwt_ajaxloader_client_AjaxLoader_nativeCreateCallback__Z(){
  if ($wnd[$intern_20] && $wnd.google[$intern_21]) {
    return true;
  }
  $wnd.__gwt_AjaxLoader_onLoad = function(){
    com_google_gwt_ajaxloader_client_AjaxLoader_onLoadCallback__V();
  }
  ;
  return false;
}

function com_google_gwt_ajaxloader_client_AjaxLoader_onLoadCallback__V(){
  var r, r$iterator;
  com_google_gwt_ajaxloader_client_AjaxLoader_loaded = true;
  for (r$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl, com_google_gwt_ajaxloader_client_AjaxLoader_queuedApiLoads.java_util_Vector_arrayList); r$iterator.java_util_AbstractList$IteratorImpl_i < r$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
    r = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(r$iterator), 3);
    r.run__V();
  }
  java_util_ArrayList_$clear__Ljava_util_ArrayList_2V(com_google_gwt_ajaxloader_client_AjaxLoader_queuedApiLoads.java_util_Vector_arrayList);
}

var com_google_gwt_ajaxloader_client_AjaxLoader_alreadyInjected = false, com_google_gwt_ajaxloader_client_AjaxLoader_initialized = false, com_google_gwt_ajaxloader_client_AjaxLoader_loaded = false, com_google_gwt_ajaxloader_client_AjaxLoader_queuedApiLoads;
function com_google_gwt_ajaxloader_client_AjaxLoader$1_$AjaxLoader$1__Lcom_google_gwt_ajaxloader_client_AjaxLoader$1_2Lcom_google_gwt_ajaxloader_client_AjaxLoader$1_2(this$static, val$api, val$version, val$copyOfSettings){
  this$static.com_google_gwt_ajaxloader_client_AjaxLoader$1_val$api = val$api;
  this$static.com_google_gwt_ajaxloader_client_AjaxLoader$1_val$version = val$version;
  this$static.com_google_gwt_ajaxloader_client_AjaxLoader$1_val$copyOfSettings = val$copyOfSettings;
  return this$static;
}

function com_google_gwt_ajaxloader_client_AjaxLoader$1_run__V(){
  com_google_gwt_ajaxloader_client_AjaxLoader_$clinit__V();
  $wnd.google.load(this.com_google_gwt_ajaxloader_client_AjaxLoader$1_val$api, this.com_google_gwt_ajaxloader_client_AjaxLoader$1_val$version, this.com_google_gwt_ajaxloader_client_AjaxLoader$1_val$copyOfSettings);
}

function com_google_gwt_ajaxloader_client_AjaxLoader$1(){
}

_ = com_google_gwt_ajaxloader_client_AjaxLoader$1.prototype = new java_lang_Object;
_.run__V = com_google_gwt_ajaxloader_client_AjaxLoader$1_run__V;
_.java_lang_Object_typeId$ = 5;
_.com_google_gwt_ajaxloader_client_AjaxLoader$1_val$api = null;
_.com_google_gwt_ajaxloader_client_AjaxLoader$1_val$copyOfSettings = null;
_.com_google_gwt_ajaxloader_client_AjaxLoader$1_val$version = null;
function com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static, other){
  return this$static.java_lang_Object_typeMarker$ == nullMethod || this$static.java_lang_Object_typeId$ == 2?this$static.equals__Ljava_lang_Object_2Z$(other):(this$static == null?null:this$static) === (other == null?null:other);
}

function com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(this$static){
  return this$static.java_lang_Object_typeMarker$ == nullMethod || this$static.java_lang_Object_typeId$ == 2?this$static.hashCode__I$():this$static.$H || (this$static.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}

function com_google_gwt_ajaxloader_client_AjaxLoader$AjaxLoaderOptions_$setCallback__Lcom_google_gwt_ajaxloader_client_AjaxLoader$AjaxLoaderOptions_2Ljava_lang_Runnable_2V(this$static, onLoad){
  this$static.callback = function(){
    onLoad.run__V();
  }
  ;
}

function com_google_gwt_ajaxloader_client_ArrayHelper_toJsArrayString___3Ljava_lang_String_2Lcom_google_gwt_core_client_JsArrayString_2(strings){
  var i, result;
  result = [];
  for (i = 0; i < strings.length; ++i) {
    result[i] = strings[i];
  }
  result.constructor = $wnd.Array;
  return result;
}

function java_lang_Throwable_$setStackTrace__Ljava_lang_Throwable_2_3Ljava_lang_StackTraceElement_2V(stackTrace){
  var c, copy, i;
  copy = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1StackTraceElement_12_1classLit, 64, 17, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (!stackTrace[i]) {
      throw java_lang_NullPointerException_$NullPointerException__Ljava_lang_NullPointerException_2Ljava_lang_NullPointerException_2(new java_lang_NullPointerException);
    }
    copy[i] = stackTrace[i];
  }
}

function java_lang_Throwable(){
}

_ = java_lang_Throwable.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 6;
function java_lang_Exception_$Exception__Ljava_lang_Exception_2Ljava_lang_String_2Ljava_lang_Throwable_2Ljava_lang_Exception_2(this$static, message){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_lang_Exception(){
}

_ = java_lang_Exception.prototype = new java_lang_Throwable;
_.java_lang_Object_typeId$ = 7;
function java_lang_RuntimeException(){
}

_ = java_lang_RuntimeException.prototype = new java_lang_Exception;
_.java_lang_Object_typeId$ = 8;
function com_google_gwt_core_client_JavaScriptException_$JavaScriptException__Lcom_google_gwt_core_client_JavaScriptException_2Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptException_2(this$static, e){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  this$static.com_google_gwt_core_client_JavaScriptException_e = e;
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$createStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JavaScriptException_2V(this$static);
  return this$static;
}

function com_google_gwt_core_client_JavaScriptException(){
}

_ = com_google_gwt_core_client_JavaScriptException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_typeId$ = 9;
_.com_google_gwt_core_client_JavaScriptException_e = null;
function com_google_gwt_core_client_Scheduler(){
}

_ = com_google_gwt_core_client_Scheduler.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(jsFunction){
  return function(){
    return com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
  }
  ;
}

function com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, arguments){
  var initialEntry;
  initialEntry = com_google_gwt_core_client_impl_Impl_entryDepth++ == 0;
  try {
    return jsFunction.apply(thisObj, arguments);
  }
   finally {
    initialEntry && com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
    --com_google_gwt_core_client_impl_Impl_entryDepth;
  }
}

var com_google_gwt_core_client_impl_Impl_entryDepth = 0, com_google_gwt_core_client_impl_Impl_sNextHashId = 0;
function com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V(){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V = nullMethod;
  com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE = com_google_gwt_core_client_impl_SchedulerImpl_$SchedulerImpl__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_impl_SchedulerImpl_2(new com_google_gwt_core_client_impl_SchedulerImpl);
}

function com_google_gwt_core_client_impl_SchedulerImpl_$SchedulerImpl__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_impl_SchedulerImpl_2(this$static){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V();
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher = com_google_gwt_core_client_impl_SchedulerImpl$1_$SchedulerImpl$1__Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2(new com_google_gwt_core_client_impl_SchedulerImpl$1, this$static);
  com_google_gwt_core_client_impl_SchedulerImpl$2_$SchedulerImpl$2__Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2(new com_google_gwt_core_client_impl_SchedulerImpl$2, this$static);
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = [];
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = [];
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = [];
  return this$static;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldFinally;
  oldFinally = this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands;
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = [];
  com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2V(oldFinally, this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands);
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldDeferred;
  oldDeferred = this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands;
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = [];
  com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2V(oldDeferred, this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands);
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = com_google_gwt_core_client_impl_SchedulerImpl_runRepeatingTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands);
}

function com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this$static){
  return this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands.length > 0 || this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands.length > 0;
}

function com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z(cmd){
  return cmd.execute__Z();
}

function com_google_gwt_core_client_impl_SchedulerImpl_runRepeatingTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks){
  var canceledSomeTasks, i, length, newTasks, start, t;
  canceledSomeTasks = false;
  length = tasks.length;
  start = (new Date).getTime();
  while ((new Date).getTime() - start < 100) {
    for (i = 0; i < length; ++i) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      if (!t[0].execute__Z()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length; ++i) {
      if (!tasks[i]) {
        continue;
      }
      newTasks[newTasks.length] = tasks[i];
    }
    return newTasks;
  }
   else {
    return tasks;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2V(tasks, rescheduled){
  var $e0, i, j, t;
  for (i = 0 , j = tasks.length; i < j; ++i) {
    t = tasks[i];
    try {
      t[1]?t[0].execute__Z() && (rescheduled[rescheduled.length] = t , undefined):t[0].nullMethod();
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, 4))
        throw $e0;
    }
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(cmd, delayMs){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V();
  $wnd.setTimeout(function(){
    var ret = $entry(com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z)(cmd);
    ret && $wnd.setTimeout(arguments.callee, delayMs);
  }
  , delayMs);
}

function com_google_gwt_core_client_impl_SchedulerImpl(){
}

_ = com_google_gwt_core_client_impl_SchedulerImpl.prototype = new com_google_gwt_core_client_Scheduler;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
_.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = false;
var com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE;
function com_google_gwt_core_client_impl_SchedulerImpl$1_$SchedulerImpl$1__Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2(this$static, this$0){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0 = this$0;
  return this$static;
}

function com_google_gwt_core_client_impl_SchedulerImpl$1_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = true;
  com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0);
  this.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
  return this.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0);
}

function com_google_gwt_core_client_impl_SchedulerImpl$1(){
}

_ = com_google_gwt_core_client_impl_SchedulerImpl$1.prototype = new java_lang_Object;
_.execute__Z = com_google_gwt_core_client_impl_SchedulerImpl$1_execute__Z;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0 = null;
function com_google_gwt_core_client_impl_SchedulerImpl$2_$SchedulerImpl$2__Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2(this$static, this$0){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl$2_this$0 = this$0;
  return this$static;
}

function com_google_gwt_core_client_impl_SchedulerImpl$2_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$2_this$0.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning && com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this.com_google_gwt_core_client_impl_SchedulerImpl$2_this$0.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
  return this.com_google_gwt_core_client_impl_SchedulerImpl$2_this$0.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning;
}

function com_google_gwt_core_client_impl_SchedulerImpl$2(){
}

_ = com_google_gwt_core_client_impl_SchedulerImpl$2.prototype = new java_lang_Object;
_.execute__Z = com_google_gwt_core_client_impl_SchedulerImpl$2_execute__Z;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_core_client_impl_SchedulerImpl$2_this$0 = null;
function com_google_gwt_core_client_impl_StackTraceCreator_extractNameFromToString__Ljava_lang_String_2Ljava_lang_String_2(fnToString){
  var index, start, toReturn;
  toReturn = $intern_3;
  fnToString = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(fnToString);
  index = fnToString.indexOf($intern_22);
  if (index != -1) {
    start = fnToString.indexOf($intern_23) == 0?8:0;
    toReturn = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(fnToString.substr(start, index - start));
  }
  return toReturn.length > 0?toReturn:$intern_24;
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_$collect__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JsArrayString_2(this$static){
  var seen = {};
  var toReturn = [];
  var callee = arguments.callee.caller.caller;
  while (callee) {
    var name = this$static.extractName__Ljava_lang_String_2Ljava_lang_String_2(callee.toString());
    toReturn.push(name);
    var keyName = $intern_25 + name;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return toReturn;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
  return toReturn;
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_$createStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JavaScriptException_2V(e){
  var i, j, stack, stackTrace;
  stack = (com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(e.com_google_gwt_core_client_JavaScriptException_e)?com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(e.com_google_gwt_core_client_JavaScriptException_e):null , []);
  stackTrace = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1StackTraceElement_12_1classLit, 64, 17, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = java_lang_StackTraceElement_$StackTraceElement__Ljava_lang_StackTraceElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ILjava_lang_StackTraceElement_2(new java_lang_StackTraceElement, $intern_26, stack[i], $intern_27, 0);
  }
  java_lang_Throwable_$setStackTrace__Ljava_lang_Throwable_2_3Ljava_lang_StackTraceElement_2V(stackTrace);
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V(){
  var i, j, stack, stackTrace;
  stack = com_google_gwt_core_client_impl_StackTraceCreator$Collector_$collect__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JsArrayString_2(new com_google_gwt_core_client_impl_StackTraceCreator$Collector);
  stackTrace = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1StackTraceElement_12_1classLit, 64, 17, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = java_lang_StackTraceElement_$StackTraceElement__Ljava_lang_StackTraceElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ILjava_lang_StackTraceElement_2(new java_lang_StackTraceElement, $intern_26, stack[i], $intern_27, 0);
  }
  java_lang_Throwable_$setStackTrace__Ljava_lang_Throwable_2_3Ljava_lang_StackTraceElement_2V(stackTrace);
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_extractName__Ljava_lang_String_2Ljava_lang_String_2(fnToString){
  return com_google_gwt_core_client_impl_StackTraceCreator_extractNameFromToString__Ljava_lang_String_2Ljava_lang_String_2(fnToString);
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector(){
}

_ = com_google_gwt_core_client_impl_StackTraceCreator$Collector.prototype = new java_lang_Object;
_.extractName__Ljava_lang_String_2Ljava_lang_String_2 = com_google_gwt_core_client_impl_StackTraceCreator$Collector_extractName__Ljava_lang_String_2Ljava_lang_String_2;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_dom_client_DOMImpl_$clinit__V(){
  com_google_gwt_dom_client_DOMImpl_$clinit__V = nullMethod;
  com_google_gwt_dom_client_DOMImplIE8_$clinit__V();
  new com_google_gwt_dom_client_DOMImplIE8;
}

function com_google_gwt_dom_client_DOMImpl_$createScriptElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ScriptElement_2(doc, source){
  var elem;
  elem = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(doc, $intern_18);
  elem.text = source;
  return elem;
}

function com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function com_google_gwt_dom_client_DOMImpl(){
}

_ = com_google_gwt_dom_client_DOMImpl.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_dom_client_DOMImplTrident_$clinit__V(){
  com_google_gwt_dom_client_DOMImplTrident_$clinit__V = nullMethod;
  com_google_gwt_dom_client_DOMImpl_$clinit__V();
}

function com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(doc, tagName){
  var container, elem;
  if (tagName.indexOf($intern_25) != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement($intern_28)) , doc.__gwt_container);
    container.innerHTML = $intern_29 + tagName + $intern_30 || $intern_3;
    elem = com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__V() , container));
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}

function com_google_gwt_dom_client_DOMImplTrident_$isOrHasChild__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(parent, child){
  if (parent.nodeType != 1 && parent.nodeType != 9) {
    return parent == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  return parent === child || parent.contains(child);
}

function com_google_gwt_dom_client_DOMImplTrident(){
}

_ = com_google_gwt_dom_client_DOMImplTrident.prototype = new com_google_gwt_dom_client_DOMImpl;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_dom_client_DOMImplTrident_currentEventTarget = null;
function com_google_gwt_dom_client_DOMImplIE8_$clinit__V(){
  com_google_gwt_dom_client_DOMImplIE8_$clinit__V = nullMethod;
  com_google_gwt_dom_client_DOMImplTrident_$clinit__V();
}

function com_google_gwt_dom_client_DOMImplIE8(){
}

_ = com_google_gwt_dom_client_DOMImplIE8.prototype = new com_google_gwt_dom_client_DOMImplTrident;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_event_shared_GwtEvent(){
}

_ = com_google_gwt_event_shared_GwtEvent.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_event_shared_GwtEvent_dead = false;
_.com_google_gwt_event_shared_GwtEvent_source = null;
function com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (com_google_gwt_event_dom_client_DomEvent_registered) {
    typeKey = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered.com_google_gwt_event_dom_client_PrivateMap_map[(com_google_gwt_dom_client_DOMImpl_$clinit__V() , nativeEvent).type], 6);
    if (typeKey) {
      currentNative = typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent;
      currentRelativeElem = typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem;
      typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent = nativeEvent;
      typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem = relativeElem;
      com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlerSource, typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight);
      typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent = currentNative;
      typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem = currentRelativeElem;
    }
  }
}

function com_google_gwt_event_dom_client_DomEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE;
}

function com_google_gwt_event_dom_client_DomEvent(){
}

_ = com_google_gwt_event_dom_client_DomEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = com_google_gwt_event_dom_client_DomEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_event_dom_client_DomEvent_nativeEvent = null;
_.com_google_gwt_event_dom_client_DomEvent_relativeElem = null;
var com_google_gwt_event_dom_client_DomEvent_registered = null;
function com_google_gwt_event_dom_client_ClickEvent_$clinit__V(){
  com_google_gwt_event_dom_client_ClickEvent_$clinit__V = nullMethod;
  com_google_gwt_event_dom_client_ClickEvent_TYPE = com_google_gwt_event_dom_client_DomEvent$Type_$DomEvent$Type__Lcom_google_gwt_event_dom_client_DomEvent$Type_2Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(new com_google_gwt_event_dom_client_DomEvent$Type, $intern_31, (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , new com_google_gwt_event_dom_client_ClickEvent));
}

function com_google_gwt_event_dom_client_ClickEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(p0){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(p0, 5);
  $wnd.alert($intern_32);
}

function com_google_gwt_event_dom_client_ClickEvent(){
}

_ = com_google_gwt_event_dom_client_ClickEvent.prototype = new com_google_gwt_event_dom_client_DomEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = com_google_gwt_event_dom_client_ClickEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_event_dom_client_ClickEvent_TYPE;
function com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_GwtEvent$Type_2(this$static){
  this$static.com_google_gwt_event_shared_GwtEvent$Type_index = ++com_google_gwt_event_shared_GwtEvent$Type_nextHashCode;
  return this$static;
}

function com_google_gwt_event_shared_GwtEvent$Type_hashCode__I(){
  return this.com_google_gwt_event_shared_GwtEvent$Type_index;
}

function com_google_gwt_event_shared_GwtEvent$Type(){
}

_ = com_google_gwt_event_shared_GwtEvent$Type.prototype = new java_lang_Object;
_.hashCode__I$ = com_google_gwt_event_shared_GwtEvent$Type_hashCode__I;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_event_shared_GwtEvent$Type_index = 0;
var com_google_gwt_event_shared_GwtEvent$Type_nextHashCode = 0;
function com_google_gwt_event_dom_client_DomEvent$Type_$DomEvent$Type__Lcom_google_gwt_event_dom_client_DomEvent$Type_2Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(this$static, eventName, flyweight){
  this$static.com_google_gwt_event_shared_GwtEvent$Type_index = ++com_google_gwt_event_shared_GwtEvent$Type_nextHashCode;
  this$static.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = flyweight;
  !com_google_gwt_event_dom_client_DomEvent_registered && (com_google_gwt_event_dom_client_DomEvent_registered = com_google_gwt_event_dom_client_PrivateMap_$PrivateMap__Lcom_google_gwt_event_dom_client_PrivateMap_2Lcom_google_gwt_event_dom_client_PrivateMap_2(new com_google_gwt_event_dom_client_PrivateMap));
  com_google_gwt_event_dom_client_DomEvent_registered.com_google_gwt_event_dom_client_PrivateMap_map[eventName] = this$static;
  this$static.com_google_gwt_event_dom_client_DomEvent$Type_name = eventName;
  return this$static;
}

function com_google_gwt_event_dom_client_DomEvent$Type(){
}

_ = com_google_gwt_event_dom_client_DomEvent$Type.prototype = new com_google_gwt_event_shared_GwtEvent$Type;
_.java_lang_Object_typeId$ = 10;
_.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = null;
_.com_google_gwt_event_dom_client_DomEvent$Type_name = null;
function com_google_gwt_event_dom_client_PrivateMap_$PrivateMap__Lcom_google_gwt_event_dom_client_PrivateMap_2Lcom_google_gwt_event_dom_client_PrivateMap_2(this$static){
  this$static.com_google_gwt_event_dom_client_PrivateMap_map = {};
  return this$static;
}

function com_google_gwt_event_dom_client_PrivateMap(){
}

_ = com_google_gwt_event_dom_client_PrivateMap.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_event_dom_client_PrivateMap_map = null;
function com_google_gwt_event_logical_shared_CloseEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(p0){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(p0, 7);
  com_google_gwt_user_client_ui_RootPanel_detachWidgets__V();
}

function com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV(source){
  var event;
  if (com_google_gwt_event_logical_shared_CloseEvent_TYPE) {
    event = new com_google_gwt_event_logical_shared_CloseEvent;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source, event);
  }
}

function com_google_gwt_event_logical_shared_CloseEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_CloseEvent_TYPE;
}

function com_google_gwt_event_logical_shared_CloseEvent(){
}

_ = com_google_gwt_event_logical_shared_CloseEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = com_google_gwt_event_logical_shared_CloseEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = com_google_gwt_event_logical_shared_CloseEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_event_logical_shared_CloseEvent_TYPE = null;
function com_google_gwt_event_shared_DefaultHandlerRegistration(){
}

_ = com_google_gwt_event_shared_DefaultHandlerRegistration.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_event_shared_HandlerManager_$HandlerManager__Lcom_google_gwt_event_shared_HandlerManager_2Ljava_lang_Object_2Lcom_google_gwt_event_shared_HandlerManager_2(this$static, source){
  this$static.com_google_gwt_event_shared_HandlerManager_registry = com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$HandlerManager$HandlerRegistry__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2(new com_google_gwt_event_shared_HandlerManager$HandlerRegistry);
  this$static.com_google_gwt_event_shared_HandlerManager_source = source;
  this$static.com_google_gwt_event_shared_HandlerManager_isReverseOrder = false;
  return this$static;
}

function com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, type, handler){
  this$static.com_google_gwt_event_shared_HandlerManager_firingDepth > 0?com_google_gwt_event_shared_HandlerManager_$defer__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_HandlerManager$AddOrRemoveCommand_2V(this$static, com_google_gwt_event_shared_HandlerManager$1_$HandlerManager$1__Lcom_google_gwt_event_shared_HandlerManager$1_2Lcom_google_gwt_event_shared_HandlerManager$1_2(new com_google_gwt_event_shared_HandlerManager$1, this$static, type, handler)):com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$addHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2V(this$static.com_google_gwt_event_shared_HandlerManager_registry, type, handler);
  return new com_google_gwt_event_shared_DefaultHandlerRegistration;
}

function com_google_gwt_event_shared_HandlerManager_$defer__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_HandlerManager$AddOrRemoveCommand_2V(this$static, command){
  !this$static.com_google_gwt_event_shared_HandlerManager_deferredDeltas && (this$static.com_google_gwt_event_shared_HandlerManager_deferredDeltas = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2Ljava_util_ArrayList_2(new java_util_ArrayList));
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_event_shared_HandlerManager_deferredDeltas, command);
}

function com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event){
  var oldSource;
  if (event.com_google_gwt_event_shared_GwtEvent_dead) {
    event.com_google_gwt_event_shared_GwtEvent_dead = false;
    event.com_google_gwt_event_shared_GwtEvent_source = null;
  }
  oldSource = event.com_google_gwt_event_shared_GwtEvent_source;
  event.com_google_gwt_event_shared_GwtEvent_source = this$static.com_google_gwt_event_shared_HandlerManager_source;
  try {
    ++this$static.com_google_gwt_event_shared_HandlerManager_firingDepth;
    com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent_2ZV(this$static.com_google_gwt_event_shared_HandlerManager_registry, event, this$static.com_google_gwt_event_shared_HandlerManager_isReverseOrder);
  }
   finally {
    --this$static.com_google_gwt_event_shared_HandlerManager_firingDepth;
    this$static.com_google_gwt_event_shared_HandlerManager_firingDepth == 0 && com_google_gwt_event_shared_HandlerManager_$handleQueuedAddsAndRemoves__Lcom_google_gwt_event_shared_HandlerManager_2V(this$static);
  }
  if (oldSource == null) {
    event.com_google_gwt_event_shared_GwtEvent_dead = true;
    event.com_google_gwt_event_shared_GwtEvent_source = null;
  }
   else {
    event.com_google_gwt_event_shared_GwtEvent_source = oldSource;
  }
}

function com_google_gwt_event_shared_HandlerManager_$handleQueuedAddsAndRemoves__Lcom_google_gwt_event_shared_HandlerManager_2V(this$static){
  var c, c$iterator;
  if (this$static.com_google_gwt_event_shared_HandlerManager_deferredDeltas) {
    try {
      for (c$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl, this$static.com_google_gwt_event_shared_HandlerManager_deferredDeltas); c$iterator.java_util_AbstractList$IteratorImpl_i < c$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
        c = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(c$iterator), 8);
        com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$addHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2V(c.com_google_gwt_event_shared_HandlerManager$1_this$0.com_google_gwt_event_shared_HandlerManager_registry, c.com_google_gwt_event_shared_HandlerManager$1_val$type, c.com_google_gwt_event_shared_HandlerManager$1_val$handler);
      }
    }
     finally {
      this$static.com_google_gwt_event_shared_HandlerManager_deferredDeltas = null;
    }
  }
}

function com_google_gwt_event_shared_HandlerManager(){
}

_ = com_google_gwt_event_shared_HandlerManager.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_event_shared_HandlerManager_deferredDeltas = null;
_.com_google_gwt_event_shared_HandlerManager_firingDepth = 0;
_.com_google_gwt_event_shared_HandlerManager_isReverseOrder = false;
_.com_google_gwt_event_shared_HandlerManager_registry = null;
_.com_google_gwt_event_shared_HandlerManager_source = null;
function com_google_gwt_event_shared_HandlerManager$1_$HandlerManager$1__Lcom_google_gwt_event_shared_HandlerManager$1_2Lcom_google_gwt_event_shared_HandlerManager$1_2(this$static, this$0, val$type, val$handler){
  this$static.com_google_gwt_event_shared_HandlerManager$1_this$0 = this$0;
  this$static.com_google_gwt_event_shared_HandlerManager$1_val$type = val$type;
  this$static.com_google_gwt_event_shared_HandlerManager$1_val$handler = val$handler;
  return this$static;
}

function com_google_gwt_event_shared_HandlerManager$1(){
}

_ = com_google_gwt_event_shared_HandlerManager$1.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 11;
_.com_google_gwt_event_shared_HandlerManager$1_this$0 = null;
_.com_google_gwt_event_shared_HandlerManager$1_val$handler = null;
_.com_google_gwt_event_shared_HandlerManager$1_val$type = null;
function com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$HandlerManager$HandlerRegistry__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2(this$static){
  this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map = java_util_HashMap_$HashMap__Ljava_util_HashMap_2Ljava_util_HashMap_2(new java_util_HashMap);
  return this$static;
}

function com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$addHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2V(this$static, type, handler){
  var l;
  l = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, type), 9);
  if (!l) {
    l = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2Ljava_util_ArrayList_2(new java_util_ArrayList);
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, type, l);
  }
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(l.java_util_ArrayList_array, l.java_util_ArrayList_size++, handler);
}

function com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent_2ZV(this$static, event, isReverseOrder){
  var count, handler, i, type, com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandlerCount__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2I_l_0, com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2ILcom_google_gwt_event_shared_EventHandler_2_l_0, com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2ILcom_google_gwt_event_shared_EventHandler_2_l_1;
  type = event.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2();
  count = (com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandlerCount__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2I_l_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, type), 9) , !com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandlerCount__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2I_l_0?0:com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandlerCount__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2I_l_0.java_util_ArrayList_size);
  if (isReverseOrder) {
    for (i = count - 1; i >= 0; --i) {
      handler = (com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2ILcom_google_gwt_event_shared_EventHandler_2_l_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, type), 9) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2((java_util_AbstractList_checkIndex__IIV(i, com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2ILcom_google_gwt_event_shared_EventHandler_2_l_0.java_util_ArrayList_size) , com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2ILcom_google_gwt_event_shared_EventHandler_2_l_0.java_util_ArrayList_array[i]), 20));
      event.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler);
    }
  }
   else {
    for (i = 0; i < count; ++i) {
      handler = (com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2ILcom_google_gwt_event_shared_EventHandler_2_l_1 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, type), 9) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2((java_util_AbstractList_checkIndex__IIV(i, com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2ILcom_google_gwt_event_shared_EventHandler_2_l_1.java_util_ArrayList_size) , com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2ILcom_google_gwt_event_shared_EventHandler_2_l_1.java_util_ArrayList_array[i]), 20));
      event.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler);
    }
  }
}

function com_google_gwt_event_shared_HandlerManager$HandlerRegistry(){
}

_ = com_google_gwt_event_shared_HandlerManager$HandlerRegistry.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(iter.next__Ljava_lang_Object_2(), 21);
    k = entry.getKey__Ljava_lang_Object_2();
    if (key == null?k == null:com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, k)) {
      remove && iter.remove__V();
      return entry;
    }
  }
  return null;
}

function java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2Ljava_util_Set_2(this$static){
  var entrySet;
  entrySet = java_util_AbstractHashMap$EntrySet_$AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap$EntrySet_2Ljava_util_AbstractHashMap$EntrySet_2(new java_util_AbstractHashMap$EntrySet, this$static);
  return java_util_AbstractMap$1_$AbstractMap$1__Ljava_util_AbstractMap$1_2Ljava_util_AbstractMap$1_2(new java_util_AbstractMap$1, this$static, entrySet);
}

function java_util_AbstractMap_containsKey__Ljava_lang_Object_2Z(key){
  return !!java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key, false);
}

function java_util_AbstractMap_equals__Ljava_lang_Object_2Z(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if ((obj == null?null:obj) === this) {
    return true;
  }
  if (!(obj != null && com_google_gwt_lang_Cast_canCast__IIZ(obj.java_lang_Object_typeId$, 2))) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(obj, 2);
  if (this.size__I() != otherMap.size__I()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); entry$iterator.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(entry$iterator.next__Ljava_lang_Object_2(), 21);
    otherKey = entry.getKey__Ljava_lang_Object_2();
    otherValue = entry.getValue__Ljava_lang_Object_2();
    if (!this.containsKey__Ljava_lang_Object_2Z(otherKey)) {
      return false;
    }
    if (!java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(otherValue, this.get__Ljava_lang_Object_2Ljava_lang_Object_2(otherKey))) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  var entry;
  entry = java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key, false);
  return !entry?null:entry.getValue__Ljava_lang_Object_2();
}

function java_util_AbstractMap_hashCode__I(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = this.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); entry$iterator.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(entry$iterator.next__Ljava_lang_Object_2(), 21);
    hashCode += entry.hashCode__I$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function java_util_AbstractMap_size__I(){
  return this.entrySet__Ljava_util_Set_2().size__I();
}

function java_util_AbstractMap(){
}

_ = java_util_AbstractMap.prototype = new java_lang_Object;
_.containsKey__Ljava_lang_Object_2Z = java_util_AbstractMap_containsKey__Ljava_lang_Object_2Z;
_.equals__Ljava_lang_Object_2Z$ = java_util_AbstractMap_equals__Ljava_lang_Object_2Z;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = java_util_AbstractMap_get__Ljava_lang_Object_2Ljava_lang_Object_2;
_.hashCode__I$ = java_util_AbstractMap_hashCode__I;
_.size__I = java_util_AbstractMap_size__I;
_.java_lang_Object_typeId$ = 12;
function com_google_gwt_i18n_client_impl_ConstantMap_$ConstantMap__Lcom_google_gwt_i18n_client_impl_ConstantMap_2_3Ljava_lang_String_2_3Ljava_lang_String_2Lcom_google_gwt_i18n_client_impl_ConstantMap_2(this$static, keys, values){
  var i;
  this$static.com_google_gwt_i18n_client_impl_ConstantMap_keys = keys;
  this$static.com_google_gwt_i18n_client_impl_ConstantMap_map = {};
  for (i = 0; i < keys.length; ++i) {
    this$static.com_google_gwt_i18n_client_impl_ConstantMap_map[$intern_25 + keys[i]] = values[i];
  }
  return this$static;
}

function com_google_gwt_i18n_client_impl_ConstantMap_$get__Lcom_google_gwt_i18n_client_impl_ConstantMap_2Ljava_lang_Object_2Ljava_lang_String_2(this$static, key){
  return key != null && com_google_gwt_lang_Cast_canCast__IIZ(key.java_lang_Object_typeId$, 1)?this$static.com_google_gwt_i18n_client_impl_ConstantMap_map[$intern_25 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(key, 1)]:null;
}

function com_google_gwt_i18n_client_impl_ConstantMap_containsKey__Ljava_lang_Object_2Z(key){
  return (key != null && com_google_gwt_lang_Cast_canCast__IIZ(key.java_lang_Object_typeId$, 1)?this.com_google_gwt_i18n_client_impl_ConstantMap_map[$intern_25 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(key, 1)]:null) != null;
}

function com_google_gwt_i18n_client_impl_ConstantMap_entrySet__Ljava_util_Set_2(){
  return com_google_gwt_i18n_client_impl_ConstantMap$1_$ConstantMap$1__Lcom_google_gwt_i18n_client_impl_ConstantMap$1_2Lcom_google_gwt_i18n_client_impl_ConstantMap$1_2(new com_google_gwt_i18n_client_impl_ConstantMap$1, this);
}

function com_google_gwt_i18n_client_impl_ConstantMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(p0){
  return p0 != null && com_google_gwt_lang_Cast_canCast__IIZ(p0.java_lang_Object_typeId$, 1)?this.com_google_gwt_i18n_client_impl_ConstantMap_map[$intern_25 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(p0, 1)]:null;
}

function com_google_gwt_i18n_client_impl_ConstantMap_size__I(){
  return this.com_google_gwt_i18n_client_impl_ConstantMap_keys.length;
}

function com_google_gwt_i18n_client_impl_ConstantMap(){
}

_ = com_google_gwt_i18n_client_impl_ConstantMap.prototype = new java_util_AbstractMap;
_.containsKey__Ljava_lang_Object_2Z = com_google_gwt_i18n_client_impl_ConstantMap_containsKey__Ljava_lang_Object_2Z;
_.entrySet__Ljava_util_Set_2 = com_google_gwt_i18n_client_impl_ConstantMap_entrySet__Ljava_util_Set_2;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = com_google_gwt_i18n_client_impl_ConstantMap_get__Ljava_lang_Object_2Ljava_lang_Object_2;
_.size__I = com_google_gwt_i18n_client_impl_ConstantMap_size__I;
_.java_lang_Object_typeId$ = 13;
_.com_google_gwt_i18n_client_impl_ConstantMap_keys = null;
_.com_google_gwt_i18n_client_impl_ConstantMap_map = null;
function java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_util_Iterator_2Ljava_lang_Object_2Ljava_util_Iterator_2(iter, o){
  var t;
  while (iter.hasNext__Z()) {
    t = iter.next__Ljava_lang_Object_2();
    if (o == null?t == null:com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, t)) {
      return iter;
    }
  }
  return null;
}

function java_util_AbstractCollection_add__Ljava_lang_Object_2Z(o){
  throw java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_String_2Ljava_lang_UnsupportedOperationException_2(new java_lang_UnsupportedOperationException, $intern_33);
}

function java_util_AbstractCollection_contains__Ljava_lang_Object_2Z(o){
  var iter;
  iter = java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_util_Iterator_2Ljava_lang_Object_2Ljava_util_Iterator_2(this.iterator__Ljava_util_Iterator_2(), o);
  return !!iter;
}

function java_util_AbstractCollection_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(a){
  var i, it, result, size;
  size = this.size__I();
  a.length < size && (a = com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(a, size));
  result = a;
  it = this.iterator__Ljava_util_Iterator_2();
  for (i = 0; i < size; ++i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(result, i, it.next__Ljava_lang_Object_2());
  }
  a.length > size && com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(a, size, null);
  return a;
}

function java_util_AbstractCollection(){
}

_ = java_util_AbstractCollection.prototype = new java_lang_Object;
_.add__Ljava_lang_Object_2Z = java_util_AbstractCollection_add__Ljava_lang_Object_2Z;
_.contains__Ljava_lang_Object_2Z = java_util_AbstractCollection_contains__Ljava_lang_Object_2Z;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = java_util_AbstractCollection_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 0;
function java_util_AbstractSet_equals__Ljava_lang_Object_2Z(o){
  var iter, other, otherItem;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && com_google_gwt_lang_Cast_canCast__IIZ(o.java_lang_Object_typeId$, 26))) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, 26);
  if (other.size__I() != this.size__I()) {
    return false;
  }
  for (iter = other.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    otherItem = iter.next__Ljava_lang_Object_2();
    if (!this.contains__Ljava_lang_Object_2Z(otherItem)) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractSet_hashCode__I(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    next = iter.next__Ljava_lang_Object_2();
    if (next != null) {
      hashCode += com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}

function java_util_AbstractSet(){
}

_ = java_util_AbstractSet.prototype = new java_util_AbstractCollection;
_.equals__Ljava_lang_Object_2Z$ = java_util_AbstractSet_equals__Ljava_lang_Object_2Z;
_.hashCode__I$ = java_util_AbstractSet_hashCode__I;
_.java_lang_Object_typeId$ = 14;
function com_google_gwt_i18n_client_impl_ConstantMap$1_$ConstantMap$1__Lcom_google_gwt_i18n_client_impl_ConstantMap$1_2Lcom_google_gwt_i18n_client_impl_ConstantMap$1_2(this$static, this$0){
  this$static.com_google_gwt_i18n_client_impl_ConstantMap$1_this$0 = this$0;
  return this$static;
}

function com_google_gwt_i18n_client_impl_ConstantMap$1_contains__Ljava_lang_Object_2Z(o){
  var other, value;
  if (!(o != null && com_google_gwt_lang_Cast_canCast__IIZ(o.java_lang_Object_typeId$, 21))) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, 21);
  value = com_google_gwt_i18n_client_impl_ConstantMap_$get__Lcom_google_gwt_i18n_client_impl_ConstantMap_2Ljava_lang_Object_2Ljava_lang_String_2(this.com_google_gwt_i18n_client_impl_ConstantMap$1_this$0, other.getKey__Ljava_lang_Object_2());
  if (value != null && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(value, other.getValue__Ljava_lang_Object_2())) {
    return true;
  }
  return false;
}

function com_google_gwt_i18n_client_impl_ConstantMap$1_iterator__Ljava_util_Iterator_2(){
  return com_google_gwt_i18n_client_impl_ConstantMap$1$1_$ConstantMap$1$1__Lcom_google_gwt_i18n_client_impl_ConstantMap$1$1_2Lcom_google_gwt_i18n_client_impl_ConstantMap$1$1_2(new com_google_gwt_i18n_client_impl_ConstantMap$1$1, this);
}

function com_google_gwt_i18n_client_impl_ConstantMap$1_size__I(){
  return this.com_google_gwt_i18n_client_impl_ConstantMap$1_this$0.com_google_gwt_i18n_client_impl_ConstantMap_keys.length;
}

function com_google_gwt_i18n_client_impl_ConstantMap$1(){
}

_ = com_google_gwt_i18n_client_impl_ConstantMap$1.prototype = new java_util_AbstractSet;
_.contains__Ljava_lang_Object_2Z = com_google_gwt_i18n_client_impl_ConstantMap$1_contains__Ljava_lang_Object_2Z;
_.iterator__Ljava_util_Iterator_2 = com_google_gwt_i18n_client_impl_ConstantMap$1_iterator__Ljava_util_Iterator_2;
_.size__I = com_google_gwt_i18n_client_impl_ConstantMap$1_size__I;
_.java_lang_Object_typeId$ = 15;
_.com_google_gwt_i18n_client_impl_ConstantMap$1_this$0 = null;
function com_google_gwt_i18n_client_impl_ConstantMap$1$1_$ConstantMap$1$1__Lcom_google_gwt_i18n_client_impl_ConstantMap$1$1_2Lcom_google_gwt_i18n_client_impl_ConstantMap$1$1_2(this$static, this$1){
  this$static.com_google_gwt_i18n_client_impl_ConstantMap$1$1_this$1 = this$1;
  return this$static;
}

function com_google_gwt_i18n_client_impl_ConstantMap$1$1_$next__Lcom_google_gwt_i18n_client_impl_ConstantMap$1$1_2Ljava_util_Map$Entry_2(this$static){
  var key;
  if (this$static.com_google_gwt_i18n_client_impl_ConstantMap$1$1_next >= this$static.com_google_gwt_i18n_client_impl_ConstantMap$1$1_this$1.com_google_gwt_i18n_client_impl_ConstantMap$1_this$0.com_google_gwt_i18n_client_impl_ConstantMap_keys.length) {
    throw java_util_NoSuchElementException_$NoSuchElementException__Ljava_util_NoSuchElementException_2Ljava_util_NoSuchElementException_2(new java_util_NoSuchElementException);
  }
  key = this$static.com_google_gwt_i18n_client_impl_ConstantMap$1$1_this$1.com_google_gwt_i18n_client_impl_ConstantMap$1_this$0.com_google_gwt_i18n_client_impl_ConstantMap_keys[this$static.com_google_gwt_i18n_client_impl_ConstantMap$1$1_next++];
  return com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_$ConstantMap$EntryImpl__Lcom_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_2(new com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl, key, this$static.com_google_gwt_i18n_client_impl_ConstantMap$1$1_this$1.com_google_gwt_i18n_client_impl_ConstantMap$1_this$0.com_google_gwt_i18n_client_impl_ConstantMap_map[$intern_25 + key]);
}

function com_google_gwt_i18n_client_impl_ConstantMap$1$1_hasNext__Z(){
  return this.com_google_gwt_i18n_client_impl_ConstantMap$1$1_next < this.com_google_gwt_i18n_client_impl_ConstantMap$1$1_this$1.com_google_gwt_i18n_client_impl_ConstantMap$1_this$0.com_google_gwt_i18n_client_impl_ConstantMap_keys.length;
}

function com_google_gwt_i18n_client_impl_ConstantMap$1$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_i18n_client_impl_ConstantMap$1$1_$next__Lcom_google_gwt_i18n_client_impl_ConstantMap$1$1_2Ljava_util_Map$Entry_2(this);
}

function com_google_gwt_i18n_client_impl_ConstantMap$1$1_remove__V(){
  throw java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_UnsupportedOperationException_2(new java_lang_UnsupportedOperationException);
}

function com_google_gwt_i18n_client_impl_ConstantMap$1$1(){
}

_ = com_google_gwt_i18n_client_impl_ConstantMap$1$1.prototype = new java_lang_Object;
_.hasNext__Z = com_google_gwt_i18n_client_impl_ConstantMap$1$1_hasNext__Z;
_.next__Ljava_lang_Object_2 = com_google_gwt_i18n_client_impl_ConstantMap$1$1_next__Ljava_lang_Object_2;
_.remove__V = com_google_gwt_i18n_client_impl_ConstantMap$1$1_remove__V;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_i18n_client_impl_ConstantMap$1$1_next = 0;
_.com_google_gwt_i18n_client_impl_ConstantMap$1$1_this$1 = null;
function com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_$ConstantMap$EntryImpl__Lcom_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_2(this$static, key, value){
  this$static.com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_key = key;
  this$static.com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_value = value;
  return this$static;
}

function com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_$setValue__Lcom_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_2Ljava_lang_String_2Ljava_lang_String_2(){
  throw java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_UnsupportedOperationException_2(new java_lang_UnsupportedOperationException);
}

function com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_equals__Ljava_lang_Object_2Z(o){
  var other;
  if (o != null && com_google_gwt_lang_Cast_canCast__IIZ(o.java_lang_Object_typeId$, 21)) {
    other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, 21);
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_key, other.getKey__Ljava_lang_Object_2()) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_value, other.getValue__Ljava_lang_Object_2())) {
      return true;
    }
  }
  return false;
}

function com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_getKey__Ljava_lang_Object_2(){
  return this.com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_key;
}

function com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_getValue__Ljava_lang_Object_2(){
  return this.com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_value;
}

function com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_hashCode__I(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  this.com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_key != null && (keyHash = java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_key));
  this.com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_value != null && (valueHash = java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_value));
  return keyHash ^ valueHash;
}

function com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(p0){
  return com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_$setValue__Lcom_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(p0, 1));
}

function com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl(){
}

_ = com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl.prototype = new java_lang_Object;
_.equals__Ljava_lang_Object_2Z$ = com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_equals__Ljava_lang_Object_2Z;
_.getKey__Ljava_lang_Object_2 = com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_getKey__Ljava_lang_Object_2;
_.getValue__Ljava_lang_Object_2 = com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_getValue__Ljava_lang_Object_2;
_.hashCode__I$ = com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_hashCode__I;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_setValue__Ljava_lang_Object_2Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 16;
_.com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_key = null;
_.com_google_gwt_i18n_client_impl_ConstantMap$EntryImpl_value = null;
function com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(array, length){
  var a, result;
  a = array;
  result = com_google_gwt_lang_Array_createFromSeed__IILcom_google_gwt_lang_Array_2(0, length);
  com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2IILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(a.com_google_gwt_lang_Array_arrayClass$, a.java_lang_Object_typeId$, a.com_google_gwt_lang_Array_queryId$, result);
  return result;
}

function com_google_gwt_lang_Array_createFromSeed__IILcom_google_gwt_lang_Array_2(seedType, length){
  var array = new Array(length);
  if (seedType > 0) {
    var value = [null, 0, false, [0, 0]][seedType];
    for (var i = 0; i < length; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(arrayClass, typeId, queryId, length, seedType){
  var result;
  result = com_google_gwt_lang_Array_createFromSeed__IILcom_google_gwt_lang_Array_2(seedType, length);
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V();
  com_google_gwt_lang_Array$ExpandoWrapper_wrapArray__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(result, com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues);
  result.com_google_gwt_lang_Array_arrayClass$ = arrayClass;
  result.java_lang_Object_typeId$ = typeId;
  result.com_google_gwt_lang_Array_queryId$ = queryId;
  return result;
}

function com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2IILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(arrayClass, typeId, queryId, array){
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V();
  com_google_gwt_lang_Array$ExpandoWrapper_wrapArray__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(array, com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues);
  array.com_google_gwt_lang_Array_arrayClass$ = arrayClass;
  array.java_lang_Object_typeId$ = typeId;
  array.com_google_gwt_lang_Array_queryId$ = queryId;
  return array;
}

function com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(array, index, value){
  if (value != null) {
    if (array.com_google_gwt_lang_Array_queryId$ > 0 && !com_google_gwt_lang_Cast_canCastUnsafe__IIZ(value.java_lang_Object_typeId$, array.com_google_gwt_lang_Array_queryId$)) {
      throw java_lang_ArrayStoreException_$ArrayStoreException__Ljava_lang_ArrayStoreException_2Ljava_lang_ArrayStoreException_2(new java_lang_ArrayStoreException);
    }
    if (array.com_google_gwt_lang_Array_queryId$ < 0 && (value.java_lang_Object_typeMarker$ == nullMethod || value.java_lang_Object_typeId$ == 2)) {
      throw java_lang_ArrayStoreException_$ArrayStoreException__Ljava_lang_ArrayStoreException_2Ljava_lang_ArrayStoreException_2(new java_lang_ArrayStoreException);
    }
  }
  return array[index] = value;
}

function com_google_gwt_lang_Array(){
}

_ = com_google_gwt_lang_Array.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_lang_Array_arrayClass$ = null;
_.length = 0;
_.com_google_gwt_lang_Array_queryId$ = 0;
function com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V(){
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V = nullMethod;
  com_google_gwt_lang_Array$ExpandoWrapper_expandoNames = [];
  com_google_gwt_lang_Array$ExpandoWrapper_expandoValues = [];
  com_google_gwt_lang_Array$ExpandoWrapper_initExpandos__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(new com_google_gwt_lang_Array, com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues);
}

function com_google_gwt_lang_Array$ExpandoWrapper_initExpandos__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name in protoType) {
    if (value = protoType[name]) {
      expandoNames[i] = name;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function com_google_gwt_lang_Array$ExpandoWrapper_wrapArray__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(array, expandoNames, expandoValues){
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues;
function com_google_gwt_lang_Cast_canCast__IIZ(srcId, dstId){
  return srcId && !!com_google_gwt_lang_Cast_typeIdArray[srcId][dstId];
}

function com_google_gwt_lang_Cast_canCastUnsafe__IIZ(srcId, dstId){
  return srcId && com_google_gwt_lang_Cast_typeIdArray[srcId][dstId];
}

function com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(src, dstId){
  if (src != null && !com_google_gwt_lang_Cast_canCastUnsafe__IIZ(src.java_lang_Object_typeId$, dstId)) {
    throw java_lang_ClassCastException_$ClassCastException__Ljava_lang_ClassCastException_2Ljava_lang_ClassCastException_2(new java_lang_ClassCastException);
  }
  return src;
}

function com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(src){
  if (src != null && (src.java_lang_Object_typeMarker$ == nullMethod || src.java_lang_Object_typeId$ == 2)) {
    throw java_lang_ClassCastException_$ClassCastException__Ljava_lang_ClassCastException_2Ljava_lang_ClassCastException_2(new java_lang_ClassCastException);
  }
  return src;
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(src, dstId){
  return src != null && com_google_gwt_lang_Cast_canCast__IIZ(src.java_lang_Object_typeId$, dstId);
}

function com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(src){
  return src != null && src.java_lang_Object_typeMarker$ != nullMethod && src.java_lang_Object_typeId$ != 2;
}

function com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(o){
  if (o != null) {
    throw java_lang_ClassCastException_$ClassCastException__Ljava_lang_ClassCastException_2Ljava_lang_ClassCastException_2(new java_lang_ClassCastException);
  }
  return o;
}

var com_google_gwt_lang_Cast_typeIdArray = [{}, {}, {1:1, 14:1, 15:1, 16:1}, {5:1, 20:1}, {3:1}, {3:1}, {14:1, 18:1}, {14:1, 18:1}, {4:1, 14:1, 18:1}, {4:1, 14:1, 18:1}, {6:1}, {8:1}, {2:1}, {2:1}, {26:1}, {26:1}, {21:1}, {10:1}, {12:1}, {10:1, 11:1, 12:1, 13:1}, {10:1, 11:1, 12:1, 13:1}, {10:1, 11:1, 12:1, 13:1}, {10:1, 11:1, 12:1, 13:1}, {4:1, 14:1, 18:1}, {10:1, 11:1, 12:1, 13:1}, {10:1, 11:1, 12:1, 13:1}, {10:1, 11:1, 12:1, 13:1}, {10:1, 11:1, 12:1, 13:1, 23:1}, {7:1, 20:1}, {10:1, 11:1, 12:1, 13:1, 23:1}, {4:1, 14:1, 18:1}, {4:1, 14:1, 18:1}, {14:1, 18:1}, {14:1, 18:1}, {4:1, 14:1, 18:1}, {4:1, 14:1, 18:1}, {4:1, 14:1, 18:1}, {4:1, 14:1, 18:1}, {14:1, 17:1}, {15:1}, {4:1, 14:1, 18:1}, {2:1}, {26:1}, {21:1}, {21:1}, {21:1}, {25:1}, {26:1}, {9:1, 14:1, 25:1}, {2:1, 14:1, 24:1}, {14:1, 26:1}, {21:1}, {4:1, 14:1, 18:1}, {14:1, 25:1}, {14:1}, {14:1}, {14:1}, {14:1}, {14:1}, {14:1, 19:1}, {14:1}, {14:1}, {14:1}, {14:1}, {14:1}, {14:1}, {14:1, 22:1}, {14:1}];
function com_google_gwt_lang_EntryMethodHolder_init__V(){
  !!$stats && $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:$intern_34, evtGroup:$intern_35, millis:(new Date).getTime(), type:$intern_36, className:$intern_37});
  alternateburndown_client_AlternateBurndownGadgetGadgetImpl_$AlternateBurndownGadgetGadgetImpl__Lalternateburndown_client_AlternateBurndownGadgetGadgetImpl_2Lalternateburndown_client_AlternateBurndownGadgetGadgetImpl_2(new alternateburndown_client_AlternateBurndownGadgetGadgetImpl);
}

function com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  if (e != null && com_google_gwt_lang_Cast_canCast__IIZ(e.java_lang_Object_typeId$, 18)) {
    return e;
  }
  return com_google_gwt_core_client_JavaScriptException_$JavaScriptException__Lcom_google_gwt_core_client_JavaScriptException_2Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptException_2(new com_google_gwt_core_client_JavaScriptException, e);
}

function com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = com_google_gwt_user_client_DOM_currentEvent;
  com_google_gwt_user_client_DOM_currentEvent = evt;
  elem == com_google_gwt_user_client_DOM_sCaptureElem && com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I((com_google_gwt_dom_client_DOMImpl_$clinit__V() , evt).type) == 8192 && (com_google_gwt_user_client_DOM_sCaptureElem = null);
  listener.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(evt);
  com_google_gwt_user_client_DOM_currentEvent = prevCurrentEvent;
}

function com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2Z(evt){
  return true;
}

function com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_user_client_Element_2IV(elem, eventBits){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplTrident_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplTrident_2Lcom_google_gwt_user_client_Element_2IV(elem, eventBits);
}

var com_google_gwt_user_client_DOM_currentEvent = null, com_google_gwt_user_client_DOM_sCaptureElem = null;
function com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_event_logical_shared_CloseEvent_TYPE?com_google_gwt_event_logical_shared_CloseEvent_TYPE:(com_google_gwt_event_logical_shared_CloseEvent_TYPE = com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_GwtEvent$Type_2(new com_google_gwt_event_shared_GwtEvent$Type)), handler);
}

function com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(type, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_user_client_Window_getHandlers__Lcom_google_gwt_user_client_Window$WindowHandlers_2(), type, handler);
}

function com_google_gwt_user_client_Window_getHandlers__Lcom_google_gwt_user_client_Window$WindowHandlers_2(){
  !com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = com_google_gwt_user_client_Window$WindowHandlers_$Window$WindowHandlers__Lcom_google_gwt_user_client_Window$WindowHandlers_2Lcom_google_gwt_user_client_Window$WindowHandlers_2(new com_google_gwt_user_client_Window$WindowHandlers));
  return com_google_gwt_user_client_Window_handlers;
}

function com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V(){
  var com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_user_client_Command_2V_scriptElem_0;
  if (!com_google_gwt_user_client_Window_closeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_user_client_Command_2V_scriptElem_0 = com_google_gwt_dom_client_DOMImpl_$createScriptElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ScriptElement_2((com_google_gwt_dom_client_DOMImpl_$clinit__V() , $doc), (!com_google_gwt_user_client_impl_com_1google_1gwt_1user_1client_1impl_1WindowImplIE_1Resources_1default_1InlineClientBundleGenerator_initWindowCloseHandler && (com_google_gwt_user_client_impl_com_1google_1gwt_1user_1client_1impl_1WindowImplIE_1Resources_1default_1InlineClientBundleGenerator_initWindowCloseHandler = new com_google_gwt_user_client_impl_com_1google_1gwt_1user_1client_1impl_1WindowImplIE_1Resources_1default_1InlineClientBundleGenerator$1) , $intern_38));
    $doc.body.appendChild(com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_user_client_Command_2V_scriptElem_0);
    $wnd.__gwt_initWindowCloseHandler($entry(com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2), $entry(com_google_gwt_user_client_Window_onClosed__V));
    $doc.body.removeChild(com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_user_client_Command_2V_scriptElem_0);
    com_google_gwt_user_client_Window_closeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_onClosed__V(){
  com_google_gwt_user_client_Window_closeHandlersInitialized && com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV(com_google_gwt_user_client_Window_getHandlers__Lcom_google_gwt_user_client_Window$WindowHandlers_2());
}

function com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2(){
  var event;
  if (com_google_gwt_user_client_Window_closeHandlersInitialized) {
    event = (com_google_gwt_user_client_Window$ClosingEvent_$clinit__V() , new com_google_gwt_user_client_Window$ClosingEvent);
    !!com_google_gwt_user_client_Window_handlers && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(com_google_gwt_user_client_Window_handlers, event);
    return null;
  }
  return null;
}

var com_google_gwt_user_client_Window_closeHandlersInitialized = false, com_google_gwt_user_client_Window_handlers = null;
function com_google_gwt_user_client_Window$ClosingEvent_$clinit__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V = nullMethod;
  com_google_gwt_user_client_Window$ClosingEvent_TYPE = com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_GwtEvent$Type_2(new com_google_gwt_event_shared_GwtEvent$Type);
}

function com_google_gwt_user_client_Window$ClosingEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(p0){
  com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(p0);
  null.nullMethod();
}

function com_google_gwt_user_client_Window$ClosingEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Window$ClosingEvent_TYPE;
}

function com_google_gwt_user_client_Window$ClosingEvent(){
}

_ = com_google_gwt_user_client_Window$ClosingEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = com_google_gwt_user_client_Window$ClosingEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = com_google_gwt_user_client_Window$ClosingEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_user_client_Window$ClosingEvent_TYPE;
function com_google_gwt_user_client_Window$WindowHandlers_$Window$WindowHandlers__Lcom_google_gwt_user_client_Window$WindowHandlers_2Lcom_google_gwt_user_client_Window$WindowHandlers_2(this$static){
  this$static.com_google_gwt_event_shared_HandlerManager_registry = com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$HandlerManager$HandlerRegistry__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2(new com_google_gwt_event_shared_HandlerManager$HandlerRegistry);
  this$static.com_google_gwt_event_shared_HandlerManager_source = null;
  this$static.com_google_gwt_event_shared_HandlerManager_isReverseOrder = false;
  return this$static;
}

function com_google_gwt_user_client_Window$WindowHandlers(){
}

_ = com_google_gwt_user_client_Window$WindowHandlers.prototype = new com_google_gwt_event_shared_HandlerManager;
_.java_lang_Object_typeId$ = 17;
function com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(eventType){
  switch (eventType) {
    case $intern_39:
      return 4096;
    case $intern_40:
      return 1024;
    case $intern_31:
      return 1;
    case $intern_41:
      return 2;
    case $intern_42:
      return 2048;
    case $intern_43:
      return 128;
    case $intern_44:
      return 256;
    case $intern_45:
      return 512;
    case $intern_21:
      return 32768;
    case $intern_46:
      return 8192;
    case $intern_47:
      return 4;
    case $intern_48:
      return 64;
    case $intern_49:
      return 32;
    case $intern_50:
      return 16;
    case $intern_51:
      return 8;
    case $intern_52:
      return 16384;
    case $intern_53:
      return 65536;
    case $intern_54:
      return 131072;
    case $intern_55:
      return 131072;
    case $intern_56:
      return 262144;
    case $intern_57:
      return 524288;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V(){
  if (!com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized) {
    com_google_gwt_user_client_impl_DOMImplTrident_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplTrident_2V();
    com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = true;
  }
}

var com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = false;
function com_google_gwt_user_client_impl_DOMImplTrident_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplTrident_2V(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2Z($wnd.event);
  }
  );
  com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent = $entry(function(){
    var oldEventTarget = (com_google_gwt_dom_client_DOMImplTrident_$clinit__V() , com_google_gwt_dom_client_DOMImplTrident_currentEventTarget);
    com_google_gwt_dom_client_DOMImplTrident_currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!com_google_gwt_user_client_impl_DOMImplTrident_previewEventImpl__Z()) {
        com_google_gwt_dom_client_DOMImplTrident_currentEventTarget = oldEventTarget;
        return;
      }
    }
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentElement;
    }
    listener && !(listener != null && listener.java_lang_Object_typeMarker$ != nullMethod && listener.java_lang_Object_typeId$ != 2) && listener != null && com_google_gwt_lang_Cast_canCast__IIZ(listener.java_lang_Object_typeId$, 11) && com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2V($wnd.event, curElem, listener);
    com_google_gwt_dom_client_DOMImplTrident_currentEventTarget = oldEventTarget;
  }
  );
  com_google_gwt_user_client_impl_DOMImplTrident_dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent($intern_58, newEvent);
    if (this.__eventBits & 2) {
      com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      com_google_gwt_user_client_impl_DOMImplTrident_previewEventImpl__Z();
    }
  }
  );
  var bodyDispatcher = $entry(function(){
    com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    com_google_gwt_user_client_impl_DOMImplTrident_dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent($intern_58, bodyDispatcher);
  $doc.body.attachEvent($intern_59, bodyDispatcher);
  $doc.body.attachEvent($intern_60, bodyDispatcher);
  $doc.body.attachEvent($intern_61, bodyDispatcher);
  $doc.body.attachEvent($intern_62, bodyDispatcher);
  $doc.body.attachEvent($intern_63, bodyDispatcher);
  $doc.body.attachEvent($intern_64, bodyDispatcher);
  $doc.body.attachEvent($intern_65, bodyDispatcher);
  $doc.body.attachEvent($intern_66, bodyDispatcher);
  $doc.body.attachEvent($intern_67, bodyDispatcher);
  $doc.body.attachEvent($intern_68, bodyDblClickDispatcher);
  $doc.body.attachEvent($intern_69, bodyDispatcher);
}

function com_google_gwt_user_client_impl_DOMImplTrident_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplTrident_2Lcom_google_gwt_user_client_Element_2IV(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?com_google_gwt_user_client_impl_DOMImplTrident_dispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 32768 && (elem.onload = bits & 32768?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 65536 && (elem.onerror = bits & 65536?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
  chMask & 524288 && (elem.onpaste = bits & 524288?com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent:null);
}

function com_google_gwt_user_client_impl_DOMImplTrident_previewEventImpl__Z(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

var com_google_gwt_user_client_impl_DOMImplTrident_dispatchDblClickEvent = null, com_google_gwt_user_client_impl_DOMImplTrident_dispatchEvent = null;
var com_google_gwt_user_client_impl_com_1google_1gwt_1user_1client_1impl_1WindowImplIE_1Resources_1default_1InlineClientBundleGenerator_initWindowCloseHandler = null;
function com_google_gwt_user_client_impl_com_1google_1gwt_1user_1client_1impl_1WindowImplIE_1Resources_1default_1InlineClientBundleGenerator$1(){
}

_ = com_google_gwt_user_client_impl_com_1google_1gwt_1user_1client_1impl_1WindowImplIE_1Resources_1default_1InlineClientBundleGenerator$1.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_user_client_ui_UIObject(){
}

_ = com_google_gwt_user_client_ui_UIObject.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 18;
_.com_google_gwt_user_client_ui_UIObject_element = null;
function com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler, type){
  com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(type.com_google_gwt_event_dom_client_DomEvent$Type_name));
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(!this$static.com_google_gwt_user_client_ui_Widget_handlerManager?(this$static.com_google_gwt_user_client_ui_Widget_handlerManager = com_google_gwt_event_shared_HandlerManager_$HandlerManager__Lcom_google_gwt_event_shared_HandlerManager_2Ljava_lang_Object_2Lcom_google_gwt_event_shared_HandlerManager_2(new com_google_gwt_event_shared_HandlerManager, this$static)):this$static.com_google_gwt_user_client_ui_Widget_handlerManager, type, handler);
}

function com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event){
  !!this$static.com_google_gwt_user_client_ui_Widget_handlerManager && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static.com_google_gwt_user_client_ui_Widget_handlerManager, event);
}

function com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  var bitsToAdd;
  if (this$static.com_google_gwt_user_client_ui_Widget_attached) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2Ljava_lang_IllegalStateException_2(new java_lang_IllegalStateException, $intern_70);
  }
  this$static.com_google_gwt_user_client_ui_Widget_attached = true;
  this$static.com_google_gwt_user_client_ui_UIObject_element.__listener = this$static;
  bitsToAdd = this$static.com_google_gwt_user_client_ui_Widget_eventsToSink;
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  bitsToAdd > 0 && com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, bitsToAdd);
  this$static.doAttachChildren__V();
  this$static.onLoad__V();
}

function com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_attached) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2Ljava_lang_IllegalStateException_2(new java_lang_IllegalStateException, $intern_71);
  }
  try {
    this$static.onUnload__V();
  }
   finally {
    try {
      this$static.doDetachChildren__V();
    }
     finally {
      this$static.com_google_gwt_user_client_ui_UIObject_element.__listener = null;
      this$static.com_google_gwt_user_client_ui_Widget_attached = false;
    }
  }
}

function com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_parent) {
    com_google_gwt_user_client_ui_RootPanel_$clinit__V();
    java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map, this$static) && com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static.com_google_gwt_user_client_ui_Widget_parent, this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2Ljava_lang_IllegalStateException_2(new java_lang_IllegalStateException, $intern_72);
  }
}

function com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, parent){
  var oldParent;
  oldParent = this$static.com_google_gwt_user_client_ui_Widget_parent;
  if (!parent) {
    try {
      !!oldParent && oldParent.com_google_gwt_user_client_ui_Widget_attached && com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
    }
     finally {
      this$static.com_google_gwt_user_client_ui_Widget_parent = null;
    }
  }
   else {
    if (oldParent) {
      throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2Ljava_lang_IllegalStateException_2(new java_lang_IllegalStateException, $intern_73);
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = parent;
    parent.com_google_gwt_user_client_ui_Widget_attached && com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
  }
}

function com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, eventBitsToAdd){
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_user_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, eventBitsToAdd | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= eventBitsToAdd);
}

function com_google_gwt_user_client_ui_Widget_doAttachChildren__V(){
}

function com_google_gwt_user_client_ui_Widget_doDetachChildren__V(){
}

function com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event){
  var related;
  switch (com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I((com_google_gwt_dom_client_DOMImpl_$clinit__V() , event).type)) {
    case 16:
    case 32:
      related = event.relatedTarget || (event.type == $intern_49?event.toElement:event.fromElement);
      if (!!related && com_google_gwt_dom_client_DOMImplTrident_$isOrHasChild__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(this.com_google_gwt_user_client_ui_UIObject_element, related)) {
        return;
      }

  }
  com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(event, this, this.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_Widget_onLoad__V(){
}

function com_google_gwt_user_client_ui_Widget_onUnload__V(){
}

function com_google_gwt_user_client_ui_Widget(){
}

_ = com_google_gwt_user_client_ui_Widget.prototype = new com_google_gwt_user_client_ui_UIObject;
_.doAttachChildren__V = com_google_gwt_user_client_ui_Widget_doAttachChildren__V;
_.doDetachChildren__V = com_google_gwt_user_client_ui_Widget_doDetachChildren__V;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V;
_.onLoad__V = com_google_gwt_user_client_ui_Widget_onLoad__V;
_.onUnload__V = com_google_gwt_user_client_ui_Widget_onUnload__V;
_.java_lang_Object_typeId$ = 19;
_.com_google_gwt_user_client_ui_Widget_attached = false;
_.com_google_gwt_user_client_ui_Widget_eventsToSink = 0;
_.com_google_gwt_user_client_ui_Widget_handlerManager = null;
_.com_google_gwt_user_client_ui_Widget_parent = null;
function com_google_gwt_user_client_ui_Panel_doAttachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_attachCommand));
}

function com_google_gwt_user_client_ui_Panel_doDetachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_detachCommand));
}

function com_google_gwt_user_client_ui_Panel_onLoad__V(){
}

function com_google_gwt_user_client_ui_Panel_onUnload__V(){
}

function com_google_gwt_user_client_ui_Panel(){
}

_ = com_google_gwt_user_client_ui_Panel.prototype = new com_google_gwt_user_client_ui_Widget;
_.doAttachChildren__V = com_google_gwt_user_client_ui_Panel_doAttachChildren__V;
_.doDetachChildren__V = com_google_gwt_user_client_ui_Panel_doDetachChildren__V;
_.onLoad__V = com_google_gwt_user_client_ui_Panel_onLoad__V;
_.onUnload__V = com_google_gwt_user_client_ui_Panel_onUnload__V;
_.java_lang_Object_typeId$ = 20;
function com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, child, container){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(child);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
  container.appendChild(child.com_google_gwt_user_client_ui_UIObject_element);
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(child, this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var elem, com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0;
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    elem = w.com_google_gwt_user_client_ui_UIObject_element;
    (com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0 = (com_google_gwt_dom_client_DOMImpl_$clinit__V() , elem).parentNode , (!com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0 || com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0.nodeType != 1) && (com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0 = null) , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0).removeChild(elem);
    com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  }
  return true;
}

function com_google_gwt_user_client_ui_ComplexPanel_iterator__Ljava_util_Iterator_2(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator, this.com_google_gwt_user_client_ui_ComplexPanel_children);
}

function com_google_gwt_user_client_ui_ComplexPanel(){
}

_ = com_google_gwt_user_client_ui_ComplexPanel.prototype = new com_google_gwt_user_client_ui_Panel;
_.iterator__Ljava_util_Iterator_2 = com_google_gwt_user_client_ui_ComplexPanel_iterator__Ljava_util_Iterator_2;
_.java_lang_Object_typeId$ = 21;
function com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w);
  removed && com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_user_client_Element_2V(w.com_google_gwt_user_client_ui_UIObject_element);
  return removed;
}

function com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_user_client_Element_2V(elem){
  elem.style[$intern_74] = $intern_3;
  elem.style[$intern_75] = $intern_3;
  elem.style[$intern_76] = $intern_3;
}

function com_google_gwt_user_client_ui_AbsolutePanel(){
}

_ = com_google_gwt_user_client_ui_AbsolutePanel.prototype = new com_google_gwt_user_client_ui_ComplexPanel;
_.java_lang_Object_typeId$ = 22;
function com_google_gwt_user_client_ui_AttachDetachException_$clinit__V(){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V = nullMethod;
  com_google_gwt_user_client_ui_AttachDetachException_attachCommand = new com_google_gwt_user_client_ui_AttachDetachException$1;
  com_google_gwt_user_client_ui_AttachDetachException_detachCommand = new com_google_gwt_user_client_ui_AttachDetachException$2;
}

function com_google_gwt_user_client_ui_AttachDetachException_$AttachDetachException__Lcom_google_gwt_user_client_ui_AttachDetachException_2Ljava_util_Set_2Lcom_google_gwt_user_client_ui_AttachDetachException_2(this$static, causes){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V();
  java_lang_Exception_$Exception__Ljava_lang_Exception_2Ljava_lang_String_2Ljava_lang_Throwable_2Ljava_lang_Exception_2(this$static, $intern_77, causes.java_util_HashSet_map.java_util_AbstractHashMap_size == 0?null:com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(causes.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Throwable_12_1classLit, 66, 18, 0, 0)), 22)[0]);
  return this$static;
}

function com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(hasWidgets, c){
  var java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z_old_0;
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V();
  var $e0, caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator__Ljava_util_Iterator_2(); w$iterator.hasNext__Z();) {
    w = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(w$iterator.next__Ljava_lang_Object_2(), 13);
    try {
      c.execute__Lcom_google_gwt_user_client_ui_Widget_2V(w);
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, 18)) {
        e = $e0;
        !caught && (caught = java_util_HashSet_$HashSet__Ljava_util_HashSet_2Ljava_util_HashSet_2(new java_util_HashSet));
        java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z_old_0 = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(caught.java_util_HashSet_map, e, caught);
      }
       else 
        throw $e0;
    }
  }
  if (caught) {
    throw com_google_gwt_user_client_ui_AttachDetachException_$AttachDetachException__Lcom_google_gwt_user_client_ui_AttachDetachException_2Ljava_util_Set_2Lcom_google_gwt_user_client_ui_AttachDetachException_2(new com_google_gwt_user_client_ui_AttachDetachException, caught);
  }
}

function com_google_gwt_user_client_ui_AttachDetachException(){
}

_ = com_google_gwt_user_client_ui_AttachDetachException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_typeId$ = 23;
var com_google_gwt_user_client_ui_AttachDetachException_attachCommand, com_google_gwt_user_client_ui_AttachDetachException_detachCommand;
function com_google_gwt_user_client_ui_AttachDetachException$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(w);
}

function com_google_gwt_user_client_ui_AttachDetachException$1(){
}

_ = com_google_gwt_user_client_ui_AttachDetachException$1.prototype = new java_lang_Object;
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = com_google_gwt_user_client_ui_AttachDetachException$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_user_client_ui_AttachDetachException$2_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(w);
}

function com_google_gwt_user_client_ui_AttachDetachException$2(){
}

_ = com_google_gwt_user_client_ui_AttachDetachException$2.prototype = new java_lang_Object;
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = com_google_gwt_user_client_ui_AttachDetachException$2_execute__Lcom_google_gwt_user_client_ui_Widget_2V;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_user_client_ui_FocusWidget(){
}

_ = com_google_gwt_user_client_ui_FocusWidget.prototype = new com_google_gwt_user_client_ui_Widget;
_.java_lang_Object_typeId$ = 24;
function com_google_gwt_user_client_ui_ButtonBase_$ButtonBase__Lcom_google_gwt_user_client_ui_ButtonBase_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_ButtonBase_2(this$static, elem){
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
  this$static.com_google_gwt_user_client_ui_UIObject_element.tabIndex = 0;
  return this$static;
}

function com_google_gwt_user_client_ui_ButtonBase(){
}

_ = com_google_gwt_user_client_ui_ButtonBase.prototype = new com_google_gwt_user_client_ui_FocusWidget;
_.java_lang_Object_typeId$ = 25;
function com_google_gwt_user_client_ui_Button_$Button__Lcom_google_gwt_user_client_ui_Button_2Ljava_lang_String_2Lcom_google_gwt_user_client_ui_Button_2(this$static, html){
  com_google_gwt_user_client_ui_ButtonBase_$ButtonBase__Lcom_google_gwt_user_client_ui_ButtonBase_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_ButtonBase_2(this$static, (com_google_gwt_dom_client_DOMImpl_$clinit__V() , $doc).createElement($intern_78));
  this$static.com_google_gwt_user_client_ui_UIObject_element[$intern_79] = $intern_80;
  this$static.com_google_gwt_user_client_ui_UIObject_element.innerHTML = html || $intern_3;
  return this$static;
}

function com_google_gwt_user_client_ui_Button(){
}

_ = com_google_gwt_user_client_ui_Button.prototype = new com_google_gwt_user_client_ui_ButtonBase;
_.java_lang_Object_typeId$ = 26;
function com_google_gwt_user_client_ui_RootPanel_$clinit__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V = nullMethod;
  com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand = new com_google_gwt_user_client_ui_RootPanel$1;
  com_google_gwt_user_client_ui_RootPanel_rootPanels = java_util_HashMap_$HashMap__Ljava_util_HashMap_2Ljava_util_HashMap_2(new java_util_HashMap);
  com_google_gwt_user_client_ui_RootPanel_widgetsToDetach = java_util_HashSet_$HashSet__Ljava_util_HashSet_2Ljava_util_HashSet_2(new java_util_HashSet);
}

function com_google_gwt_user_client_ui_RootPanel_$RootPanel__Lcom_google_gwt_user_client_ui_RootPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_RootPanel_2(this$static, elem){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  this$static.com_google_gwt_user_client_ui_ComplexPanel_children = com_google_gwt_user_client_ui_WidgetCollection_$WidgetCollection__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_HasWidgets_2Lcom_google_gwt_user_client_ui_WidgetCollection_2(new com_google_gwt_user_client_ui_WidgetCollection, this$static);
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
  return this$static;
}

function com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(widget){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  }
   finally {
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map, widget) != null;
  }
}

function com_google_gwt_user_client_ui_RootPanel_detachWidgets__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand);
  }
   finally {
    java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map);
    java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_rootPanels);
  }
}

function com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(id){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  var rp;
  rp = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, id), 23);
  if (rp) {
    return rp;
  }
  com_google_gwt_user_client_ui_RootPanel_rootPanels.java_util_AbstractHashMap_size == 0 && com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_RootPanel$2);
  rp = com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_$RootPanel$DefaultRootPanel__Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2(new com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel);
  java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, id, rp);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, rp);
  return rp;
}

function com_google_gwt_user_client_ui_RootPanel(){
}

_ = com_google_gwt_user_client_ui_RootPanel.prototype = new com_google_gwt_user_client_ui_AbsolutePanel;
_.java_lang_Object_typeId$ = 27;
var com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand, com_google_gwt_user_client_ui_RootPanel_rootPanels, com_google_gwt_user_client_ui_RootPanel_widgetsToDetach;
function com_google_gwt_user_client_ui_RootPanel$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.com_google_gwt_user_client_ui_Widget_attached && com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(w);
}

function com_google_gwt_user_client_ui_RootPanel$1(){
}

_ = com_google_gwt_user_client_ui_RootPanel$1.prototype = new java_lang_Object;
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = com_google_gwt_user_client_ui_RootPanel$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_user_client_ui_RootPanel$2(){
}

_ = com_google_gwt_user_client_ui_RootPanel$2.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 28;
function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_$clinit__V(){
  com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_$clinit__V = nullMethod;
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
}

function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_$RootPanel$DefaultRootPanel__Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2(this$static){
  com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_$clinit__V();
  com_google_gwt_user_client_ui_RootPanel_$RootPanel__Lcom_google_gwt_user_client_ui_RootPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_RootPanel_2(this$static, $doc.body);
  return this$static;
}

function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel(){
}

_ = com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel.prototype = new com_google_gwt_user_client_ui_RootPanel;
_.java_lang_Object_typeId$ = 29;
function com_google_gwt_user_client_ui_WidgetCollection_$WidgetCollection__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_HasWidgets_2Lcom_google_gwt_user_client_ui_WidgetCollection_2(this$static, parent){
  this$static.com_google_gwt_user_client_ui_WidgetCollection_parent = parent;
  this$static.com_google_gwt_user_client_ui_WidgetCollection_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, 58, 13, 4, 0);
  return this$static;
}

function com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, this$static.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w){
  var i;
  for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    if (this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] == w) {
      return i;
    }
  }
  return -1;
}

function com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw java_lang_IndexOutOfBoundsException_$IndexOutOfBoundsException__Ljava_lang_IndexOutOfBoundsException_2Ljava_lang_IndexOutOfBoundsException_2(new java_lang_IndexOutOfBoundsException);
  }
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection_size == this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length) {
    newArray = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, 58, 13, this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length * 2, 0);
    for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length; ++i) {
      com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(newArray, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i]);
    }
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array = newArray;
  }
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = this$static.com_google_gwt_user_client_ui_WidgetCollection_size - 1; i > beforeIndex; --i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i - 1]);
  }
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, beforeIndex, w);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index){
  var i;
  if (index < 0 || index >= this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw java_lang_IndexOutOfBoundsException_$IndexOutOfBoundsException__Ljava_lang_IndexOutOfBoundsException_2Ljava_lang_IndexOutOfBoundsException_2(new java_lang_IndexOutOfBoundsException);
  }
  --this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = index; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i + 1]);
  }
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, this$static.com_google_gwt_user_client_ui_WidgetCollection_size, null);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var index;
  index = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w);
  if (index == -1) {
    throw java_util_NoSuchElementException_$NoSuchElementException__Ljava_util_NoSuchElementException_2Ljava_util_NoSuchElementException_2(new java_util_NoSuchElementException);
  }
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index);
}

function com_google_gwt_user_client_ui_WidgetCollection_iterator__Ljava_util_Iterator_2(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator, this);
}

function com_google_gwt_user_client_ui_WidgetCollection(){
}

_ = com_google_gwt_user_client_ui_WidgetCollection.prototype = new java_lang_Object;
_.iterator__Ljava_util_Iterator_2 = com_google_gwt_user_client_ui_WidgetCollection_iterator__Ljava_util_Iterator_2;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_WidgetCollection_array = null;
_.com_google_gwt_user_client_ui_WidgetCollection_parent = null;
_.com_google_gwt_user_client_ui_WidgetCollection_size = 0;
function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(this$static, this$0){
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0 = this$0;
  return this$static;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw java_util_NoSuchElementException_$NoSuchElementException__Ljava_util_NoSuchElementException_2Ljava_util_NoSuchElementException_2(new java_util_NoSuchElementException);
  }
  return this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_array[++this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index];
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size - 1;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_remove__V(){
  if (this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < 0 || this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_IllegalStateException_2(new java_lang_IllegalStateException);
  }
  com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_parent, this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_array[this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index--]);
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator(){
}

_ = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator.prototype = new java_lang_Object;
_.hasNext__Z = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__Z;
_.next__Ljava_lang_Object_2 = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__Ljava_lang_Object_2;
_.remove__V = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_remove__V;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index = -1;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0 = null;
function com_google_gwt_visualization_client_Query_$send__Lcom_google_gwt_visualization_client_Query_2Lcom_google_gwt_visualization_client_Query$Callback_2V(this$static, callback){
  this$static.send(function(c){
    callback.onResponse__Lcom_google_gwt_visualization_client_QueryResponse_2V(c);
  }
  );
}

function com_google_gwt_visualization_client_VisualizationUtils_loadVisualizationApi__Ljava_lang_String_2Ljava_lang_Runnable_2Lcom_google_gwt_core_client_JsArrayString_2V(version, onLoad, packages){
  var options;
  options = {};
  options.packages = packages;
  com_google_gwt_ajaxloader_client_AjaxLoader_loadApi__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Runnable_2Lcom_google_gwt_ajaxloader_client_AjaxLoader$AjaxLoaderOptions_2V($intern_81, version, onLoad, options);
}

function java_lang_ArrayStoreException_$ArrayStoreException__Ljava_lang_ArrayStoreException_2Ljava_lang_ArrayStoreException_2(this$static){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_lang_ArrayStoreException(){
}

_ = java_lang_ArrayStoreException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_typeId$ = 31;
function java_lang_Class(){
}

_ = java_lang_Class.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function java_lang_ClassCastException_$ClassCastException__Ljava_lang_ClassCastException_2Ljava_lang_ClassCastException_2(this$static){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_lang_ClassCastException(){
}

_ = java_lang_ClassCastException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_typeId$ = 34;
function java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_IllegalStateException_2(this$static){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2Ljava_lang_IllegalStateException_2(this$static, s){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_lang_IllegalStateException(){
}

_ = java_lang_IllegalStateException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_typeId$ = 35;
function java_lang_IndexOutOfBoundsException_$IndexOutOfBoundsException__Ljava_lang_IndexOutOfBoundsException_2Ljava_lang_IndexOutOfBoundsException_2(this$static){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_lang_IndexOutOfBoundsException_$IndexOutOfBoundsException__Ljava_lang_IndexOutOfBoundsException_2Ljava_lang_String_2Ljava_lang_IndexOutOfBoundsException_2(this$static, message){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_lang_IndexOutOfBoundsException(){
}

_ = java_lang_IndexOutOfBoundsException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_typeId$ = 36;
function java_lang_NullPointerException_$NullPointerException__Ljava_lang_NullPointerException_2Ljava_lang_NullPointerException_2(this$static){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_lang_NullPointerException(){
}

_ = java_lang_NullPointerException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_typeId$ = 37;
function java_lang_StackTraceElement_$StackTraceElement__Ljava_lang_StackTraceElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ILjava_lang_StackTraceElement_2(this$static, className, methodName, fileName, lineNumber){
  return this$static;
}

function java_lang_StackTraceElement(){
}

_ = java_lang_StackTraceElement.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 38;
function java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other){
  if (!(other != null && com_google_gwt_lang_Cast_canCast__IIZ(other.java_lang_Object_typeId$, 1))) {
    return false;
  }
  return String(this$static) == other;
}

function java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(this$static){
  if (this$static.length == 0 || this$static[0] > $intern_82 && this$static[this$static.length - 1] > $intern_82) {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, $intern_3);
  var r2 = r1.replace(/\s*$/, $intern_3);
  return r2;
}

function java_lang_String_equals__Ljava_lang_Object_2Z(other){
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this, other);
}

function java_lang_String_hashCode__I(){
  return java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this);
}

_ = String.prototype;
_.equals__Ljava_lang_Object_2Z$ = java_lang_String_equals__Ljava_lang_Object_2Z;
_.hashCode__I$ = java_lang_String_hashCode__I;
_.java_lang_Object_typeId$ = 2;
function java_lang_String$HashCache_$clinit__V(){
  java_lang_String$HashCache_$clinit__V = nullMethod;
  java_lang_String$HashCache_back = {};
  java_lang_String$HashCache_front = {};
}

function java_lang_String$HashCache_compute__Ljava_lang_String_2I(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + str.charCodeAt(i++);
  }
  return hashCode | 0;
}

function java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(str){
  java_lang_String$HashCache_$clinit__V();
  var key = $intern_25 + str;
  var result = java_lang_String$HashCache_front[key];
  if (result != null) {
    return result;
  }
  result = java_lang_String$HashCache_back[key];
  result == null && (result = java_lang_String$HashCache_compute__Ljava_lang_String_2I(str));
  java_lang_String$HashCache_increment__V();
  return java_lang_String$HashCache_front[key] = result;
}

function java_lang_String$HashCache_increment__V(){
  if (java_lang_String$HashCache_count == 256) {
    java_lang_String$HashCache_back = java_lang_String$HashCache_front;
    java_lang_String$HashCache_front = {};
    java_lang_String$HashCache_count = 0;
  }
  ++java_lang_String$HashCache_count;
}

var java_lang_String$HashCache_back, java_lang_String$HashCache_count = 0, java_lang_String$HashCache_front;
function java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_UnsupportedOperationException_2(this$static){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_String_2Ljava_lang_UnsupportedOperationException_2(this$static, message){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_lang_UnsupportedOperationException(){
}

_ = java_lang_UnsupportedOperationException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_typeId$ = 40;
function java_util_AbstractHashMap_$addAllHashEntries__Ljava_util_AbstractHashMap_2Ljava_util_Collection_2V(this$static, dest){
  var hashCodeMap = this$static.java_util_AbstractHashMap_hashCodeMap;
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add__Ljava_lang_Object_2Z(array[i]);
      }
    }
  }
}

function java_util_AbstractHashMap_$addAllStringEntries__Ljava_util_AbstractHashMap_2Ljava_util_Collection_2V(this$static, dest){
  var stringMap = this$static.java_util_AbstractHashMap_stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = java_util_AbstractHashMap$MapEntryString_new__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_util_AbstractHashMap$MapEntryString_2(this$static, key.substring(1));
      dest.add__Ljava_lang_Object_2Z(entry);
    }
  }
}

function java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2V(this$static){
  this$static.java_util_AbstractHashMap_hashCodeMap = [];
  this$static.java_util_AbstractHashMap_stringMap = {};
  this$static.java_util_AbstractHashMap_nullSlotLive = false;
  this$static.java_util_AbstractHashMap_nullSlot = null;
  this$static.java_util_AbstractHashMap_size = 0;
}

function java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, key){
  return key == null?this$static.java_util_AbstractHashMap_nullSlotLive:key != null && com_google_gwt_lang_Cast_canCast__IIZ(key.java_lang_Object_typeId$, 1)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(key, 1)):java_util_AbstractHashMap_$hasHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2IZ(this$static, key, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(key));
}

function java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return key == null?this$static.java_util_AbstractHashMap_nullSlot:key != null && com_google_gwt_lang_Cast_canCast__IIZ(key.java_lang_Object_typeId$, 1)?this$static.java_util_AbstractHashMap_stringMap[$intern_25 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(key, 1)]:java_util_AbstractHashMap_$getHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2ILjava_lang_Object_2(this$static, key, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(key));
}

function java_util_AbstractHashMap_$getHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2ILjava_lang_Object_2(this$static, key, hashCode){
  var array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__Ljava_lang_Object_2();
      if (this$static.private$java_util_AbstractHashMap$equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entryKey)) {
        return entry.getValue__Ljava_lang_Object_2();
      }
    }
  }
  return null;
}

function java_util_AbstractHashMap_$hasHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2IZ(this$static, key, hashCode){
  var array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__Ljava_lang_Object_2();
      if (this$static.private$java_util_AbstractHashMap$equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key){
  return $intern_25 + key in this$static.java_util_AbstractHashMap_stringMap;
}

function java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value){
  return key == null?java_util_AbstractHashMap_$putNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, value):key != null && com_google_gwt_lang_Cast_canCast__IIZ(key.java_lang_Object_typeId$, 1)?java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(key, 1), value):java_util_AbstractHashMap_$putHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2(this$static, key, value, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(key));
}

function java_util_AbstractHashMap_$putHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2(this$static, key, value, hashCode){
  var array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__Ljava_lang_Object_2();
      if (this$static.private$java_util_AbstractHashMap$equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entryKey)) {
        var previous = entry.getValue__Ljava_lang_Object_2();
        entry.setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode] = [];
  }
  var entry = java_util_MapEntryImpl_$MapEntryImpl__Ljava_util_MapEntryImpl_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_util_MapEntryImpl_2(new java_util_MapEntryImpl, key, value);
  array.push(entry);
  ++this$static.java_util_AbstractHashMap_size;
  return null;
}

function java_util_AbstractHashMap_$putNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, value){
  var result;
  result = this$static.java_util_AbstractHashMap_nullSlot;
  this$static.java_util_AbstractHashMap_nullSlot = value;
  if (!this$static.java_util_AbstractHashMap_nullSlotLive) {
    this$static.java_util_AbstractHashMap_nullSlotLive = true;
    ++this$static.java_util_AbstractHashMap_size;
  }
  return result;
}

function java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value){
  var result, stringMap = this$static.java_util_AbstractHashMap_stringMap;
  key = $intern_25 + key;
  key in stringMap?(result = stringMap[key]):++this$static.java_util_AbstractHashMap_size;
  stringMap[key] = value;
  return result;
}

function java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return key == null?java_util_AbstractHashMap_$removeNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static):key != null && com_google_gwt_lang_Cast_canCast__IIZ(key.java_lang_Object_typeId$, 1)?java_util_AbstractHashMap_$removeStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(key, 1)):java_util_AbstractHashMap_$removeHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2ILjava_lang_Object_2(this$static, key, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(key));
}

function java_util_AbstractHashMap_$removeHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2ILjava_lang_Object_2(this$static, key, hashCode){
  var array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__Ljava_lang_Object_2();
      if (this$static.private$java_util_AbstractHashMap$equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entryKey)) {
        array.length == 1?delete this$static.java_util_AbstractHashMap_hashCodeMap[hashCode]:array.splice(i, 1);
        --this$static.java_util_AbstractHashMap_size;
        return entry.getValue__Ljava_lang_Object_2();
      }
    }
  }
  return null;
}

function java_util_AbstractHashMap_$removeNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static){
  var result;
  result = this$static.java_util_AbstractHashMap_nullSlot;
  this$static.java_util_AbstractHashMap_nullSlot = null;
  if (this$static.java_util_AbstractHashMap_nullSlotLive) {
    this$static.java_util_AbstractHashMap_nullSlotLive = false;
    --this$static.java_util_AbstractHashMap_size;
  }
  return result;
}

function java_util_AbstractHashMap_$removeStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  var result, stringMap = this$static.java_util_AbstractHashMap_stringMap;
  key = $intern_25 + key;
  if (key in stringMap) {
    result = stringMap[key];
    --this$static.java_util_AbstractHashMap_size;
    delete stringMap[key];
  }
  return result;
}

function java_util_AbstractHashMap_containsKey__Ljava_lang_Object_2Z(key){
  return key == null?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this, 24).java_util_AbstractHashMap_nullSlotLive:key != null && com_google_gwt_lang_Cast_canCast__IIZ(key.java_lang_Object_typeId$, 1)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this, 24), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(key, 1)):java_util_AbstractHashMap_$hasHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2IZ(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this, 24), key, ~~(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this, 24) , com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(key)));
}

function java_util_AbstractHashMap_entrySet__Ljava_util_Set_2(){
  return java_util_AbstractHashMap$EntrySet_$AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap$EntrySet_2Ljava_util_AbstractHashMap$EntrySet_2(new java_util_AbstractHashMap$EntrySet, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this, 24));
}

function java_util_AbstractHashMap_equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2);
}

function java_util_AbstractHashMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return key == null?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this, 24).java_util_AbstractHashMap_nullSlot:key != null && com_google_gwt_lang_Cast_canCast__IIZ(key.java_lang_Object_typeId$, 1)?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this, 24).java_util_AbstractHashMap_stringMap[$intern_25 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(key, 1)]:java_util_AbstractHashMap_$getHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2ILjava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this, 24), key, ~~(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this, 24) , com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(key)));
}

function java_util_AbstractHashMap_size__I(){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this, 24).java_util_AbstractHashMap_size;
}

function java_util_AbstractHashMap(){
}

_ = java_util_AbstractHashMap.prototype = new java_util_AbstractMap;
_.containsKey__Ljava_lang_Object_2Z = java_util_AbstractHashMap_containsKey__Ljava_lang_Object_2Z;
_.entrySet__Ljava_util_Set_2 = java_util_AbstractHashMap_entrySet__Ljava_util_Set_2;
_.private$java_util_AbstractHashMap$equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z = java_util_AbstractHashMap_equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = java_util_AbstractHashMap_get__Ljava_lang_Object_2Ljava_lang_Object_2;
_.size__I = java_util_AbstractHashMap_size__I;
_.java_lang_Object_typeId$ = 41;
_.java_util_AbstractHashMap_hashCodeMap = null;
_.java_util_AbstractHashMap_nullSlot = null;
_.java_util_AbstractHashMap_nullSlotLive = false;
_.java_util_AbstractHashMap_size = 0;
_.java_util_AbstractHashMap_stringMap = null;
function java_util_AbstractHashMap$EntrySet_$AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap$EntrySet_2Ljava_util_AbstractHashMap$EntrySet_2(this$static, this$0){
  this$static.java_util_AbstractHashMap$EntrySet_this$0 = this$0;
  return this$static;
}

function java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  var entry, key, value;
  if (o != null && com_google_gwt_lang_Cast_canCast__IIZ(o.java_lang_Object_typeId$, 21)) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, 21);
    key = entry.getKey__Ljava_lang_Object_2();
    if (java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static.java_util_AbstractHashMap$EntrySet_this$0, key)) {
      value = java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySet_this$0, key);
      return java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(entry.getValue__Ljava_lang_Object_2(), value);
    }
  }
  return false;
}

function java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, o);
}

function java_util_AbstractHashMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_AbstractHashMap$EntrySetIterator_2(new java_util_AbstractHashMap$EntrySetIterator, this.java_util_AbstractHashMap$EntrySet_this$0);
}

function java_util_AbstractHashMap$EntrySet_size__I(){
  return this.java_util_AbstractHashMap$EntrySet_this$0.java_util_AbstractHashMap_size;
}

function java_util_AbstractHashMap$EntrySet(){
}

_ = java_util_AbstractHashMap$EntrySet.prototype = new java_util_AbstractSet;
_.contains__Ljava_lang_Object_2Z = java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2Z;
_.iterator__Ljava_util_Iterator_2 = java_util_AbstractHashMap$EntrySet_iterator__Ljava_util_Iterator_2;
_.size__I = java_util_AbstractHashMap$EntrySet_size__I;
_.java_lang_Object_typeId$ = 42;
_.java_util_AbstractHashMap$EntrySet_this$0 = null;
function java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_AbstractHashMap$EntrySetIterator_2(this$static, this$0){
  var list;
  this$static.java_util_AbstractHashMap$EntrySetIterator_this$0 = this$0;
  list = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2Ljava_util_ArrayList_2(new java_util_ArrayList);
  this$static.java_util_AbstractHashMap$EntrySetIterator_this$0.java_util_AbstractHashMap_nullSlotLive && java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(list, java_util_AbstractHashMap$MapEntryNull_$AbstractHashMap$MapEntryNull__Ljava_util_AbstractHashMap$MapEntryNull_2Ljava_util_AbstractHashMap$MapEntryNull_2(new java_util_AbstractHashMap$MapEntryNull, this$static.java_util_AbstractHashMap$EntrySetIterator_this$0));
  java_util_AbstractHashMap_$addAllStringEntries__Ljava_util_AbstractHashMap_2Ljava_util_Collection_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$0, list);
  java_util_AbstractHashMap_$addAllHashEntries__Ljava_util_AbstractHashMap_2Ljava_util_Collection_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$0, list);
  this$static.java_util_AbstractHashMap$EntrySetIterator_iter = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl, list);
  return this$static;
}

function java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_lang_Object_2(this$static){
  return this$static.java_util_AbstractHashMap$EntrySetIterator_last = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySetIterator_iter), 21);
}

function java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this$static){
  if (!this$static.java_util_AbstractHashMap$EntrySetIterator_last) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2Ljava_lang_IllegalStateException_2(new java_lang_IllegalStateException, $intern_83);
  }
   else {
    java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_iter);
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySetIterator_this$0, this$static.java_util_AbstractHashMap$EntrySetIterator_last.getKey__Ljava_lang_Object_2());
    this$static.java_util_AbstractHashMap$EntrySetIterator_last = null;
  }
}

function java_util_AbstractHashMap$EntrySetIterator_hasNext__Z(){
  return java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(this.java_util_AbstractHashMap$EntrySetIterator_iter);
}

function java_util_AbstractHashMap$EntrySetIterator_next__Ljava_lang_Object_2(){
  return this.java_util_AbstractHashMap$EntrySetIterator_last = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$EntrySetIterator_iter), 21);
}

function java_util_AbstractHashMap$EntrySetIterator_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this);
}

function java_util_AbstractHashMap$EntrySetIterator(){
}

_ = java_util_AbstractHashMap$EntrySetIterator.prototype = new java_lang_Object;
_.hasNext__Z = java_util_AbstractHashMap$EntrySetIterator_hasNext__Z;
_.next__Ljava_lang_Object_2 = java_util_AbstractHashMap$EntrySetIterator_next__Ljava_lang_Object_2;
_.remove__V = java_util_AbstractHashMap$EntrySetIterator_remove__V;
_.java_lang_Object_typeId$ = 0;
_.java_util_AbstractHashMap$EntrySetIterator_iter = null;
_.java_util_AbstractHashMap$EntrySetIterator_last = null;
_.java_util_AbstractHashMap$EntrySetIterator_this$0 = null;
function java_util_AbstractMapEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (other != null && com_google_gwt_lang_Cast_canCast__IIZ(other.java_lang_Object_typeId$, 21)) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(other, 21);
    if (java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.getKey__Ljava_lang_Object_2(), entry.getKey__Ljava_lang_Object_2()) && java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.getValue__Ljava_lang_Object_2(), entry.getValue__Ljava_lang_Object_2())) {
      return true;
    }
  }
  return false;
}

function java_util_AbstractMapEntry_hashCode__I(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  this.getKey__Ljava_lang_Object_2() != null && (keyHash = com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(this.getKey__Ljava_lang_Object_2()));
  this.getValue__Ljava_lang_Object_2() != null && (valueHash = com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(this.getValue__Ljava_lang_Object_2()));
  return keyHash ^ valueHash;
}

function java_util_AbstractMapEntry(){
}

_ = java_util_AbstractMapEntry.prototype = new java_lang_Object;
_.equals__Ljava_lang_Object_2Z$ = java_util_AbstractMapEntry_equals__Ljava_lang_Object_2Z;
_.hashCode__I$ = java_util_AbstractMapEntry_hashCode__I;
_.java_lang_Object_typeId$ = 43;
function java_util_AbstractHashMap$MapEntryNull_$AbstractHashMap$MapEntryNull__Ljava_util_AbstractHashMap$MapEntryNull_2Ljava_util_AbstractHashMap$MapEntryNull_2(this$static, this$0){
  this$static.java_util_AbstractHashMap$MapEntryNull_this$0 = this$0;
  return this$static;
}

function java_util_AbstractHashMap$MapEntryNull_getKey__Ljava_lang_Object_2(){
  return null;
}

function java_util_AbstractHashMap$MapEntryNull_getValue__Ljava_lang_Object_2(){
  return this.java_util_AbstractHashMap$MapEntryNull_this$0.java_util_AbstractHashMap_nullSlot;
}

function java_util_AbstractHashMap$MapEntryNull_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(object){
  return java_util_AbstractHashMap_$putNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$MapEntryNull_this$0, object);
}

function java_util_AbstractHashMap$MapEntryNull(){
}

_ = java_util_AbstractHashMap$MapEntryNull.prototype = new java_util_AbstractMapEntry;
_.getKey__Ljava_lang_Object_2 = java_util_AbstractHashMap$MapEntryNull_getKey__Ljava_lang_Object_2;
_.getValue__Ljava_lang_Object_2 = java_util_AbstractHashMap$MapEntryNull_getValue__Ljava_lang_Object_2;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = java_util_AbstractHashMap$MapEntryNull_setValue__Ljava_lang_Object_2Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 44;
_.java_util_AbstractHashMap$MapEntryNull_this$0 = null;
function java_util_AbstractHashMap$MapEntryString_$AbstractHashMap$MapEntryString__Ljava_util_AbstractHashMap$MapEntryString_2Ljava_lang_String_2Ljava_util_AbstractHashMap$MapEntryString_2(this$static, key, this$0){
  this$static.java_util_AbstractHashMap$MapEntryString_this$0 = this$0;
  this$static.java_util_AbstractHashMap$MapEntryString_key = key;
  return this$static;
}

function java_util_AbstractHashMap$MapEntryString_getKey__Ljava_lang_Object_2(){
  return this.java_util_AbstractHashMap$MapEntryString_key;
}

function java_util_AbstractHashMap$MapEntryString_getValue__Ljava_lang_Object_2(){
  return this.java_util_AbstractHashMap$MapEntryString_this$0.java_util_AbstractHashMap_stringMap[$intern_25 + this.java_util_AbstractHashMap$MapEntryString_key];
}

function java_util_AbstractHashMap$MapEntryString_new__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_util_AbstractHashMap$MapEntryString_2(this$outer, key){
  return java_util_AbstractHashMap$MapEntryString_$AbstractHashMap$MapEntryString__Ljava_util_AbstractHashMap$MapEntryString_2Ljava_lang_String_2Ljava_util_AbstractHashMap$MapEntryString_2(new java_util_AbstractHashMap$MapEntryString, key, this$outer);
}

function java_util_AbstractHashMap$MapEntryString_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(object){
  return java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$MapEntryString_this$0, this.java_util_AbstractHashMap$MapEntryString_key, object);
}

function java_util_AbstractHashMap$MapEntryString(){
}

_ = java_util_AbstractHashMap$MapEntryString.prototype = new java_util_AbstractMapEntry;
_.getKey__Ljava_lang_Object_2 = java_util_AbstractHashMap$MapEntryString_getKey__Ljava_lang_Object_2;
_.getValue__Ljava_lang_Object_2 = java_util_AbstractHashMap$MapEntryString_getValue__Ljava_lang_Object_2;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = java_util_AbstractHashMap$MapEntryString_setValue__Ljava_lang_Object_2Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 45;
_.java_util_AbstractHashMap$MapEntryString_key = null;
_.java_util_AbstractHashMap$MapEntryString_this$0 = null;
function java_util_AbstractList_add__Ljava_lang_Object_2Z(obj){
  this.add__ILjava_lang_Object_2V(this.size__I(), obj);
  return true;
}

function java_util_AbstractList_add__ILjava_lang_Object_2V(index, element){
  throw java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_String_2Ljava_lang_UnsupportedOperationException_2(new java_lang_UnsupportedOperationException, $intern_84);
}

function java_util_AbstractList_checkIndex__IIV(index, size){
  (index < 0 || index >= size) && java_util_AbstractList_indexOutOfBounds__IIV(index, size);
}

function java_util_AbstractList_equals__Ljava_lang_Object_2Z(o){
  var elem, elemOther, iter, iterOther, other;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && com_google_gwt_lang_Cast_canCast__IIZ(o.java_lang_Object_typeId$, 25))) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, 25);
  if (this.size__I() != other.size__I()) {
    return false;
  }
  iter = this.iterator__Ljava_util_Iterator_2();
  iterOther = other.iterator__Ljava_util_Iterator_2();
  while (iter.java_util_AbstractList$IteratorImpl_i < iter.java_util_AbstractList$IteratorImpl_this$0.size__I()) {
    elem = java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(iter);
    elemOther = java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(iterOther);
    if (!(elem == null?elemOther == null:com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractList_hashCode__I(){
  var iter, k, obj;
  k = 1;
  iter = this.iterator__Ljava_util_Iterator_2();
  while (iter.java_util_AbstractList$IteratorImpl_i < iter.java_util_AbstractList$IteratorImpl_this$0.size__I()) {
    obj = java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(iter);
    k = 31 * k + (obj == null?0:com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(obj));
    k = ~~k;
  }
  return k;
}

function java_util_AbstractList_indexOutOfBounds__IIV(index, size){
  throw java_lang_IndexOutOfBoundsException_$IndexOutOfBoundsException__Ljava_lang_IndexOutOfBoundsException_2Ljava_lang_String_2Ljava_lang_IndexOutOfBoundsException_2(new java_lang_IndexOutOfBoundsException, $intern_85 + index + $intern_86 + size);
}

function java_util_AbstractList_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl, this);
}

function java_util_AbstractList_remove__ILjava_lang_Object_2(index){
  throw java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_String_2Ljava_lang_UnsupportedOperationException_2(new java_lang_UnsupportedOperationException, $intern_87);
}

function java_util_AbstractList(){
}

_ = java_util_AbstractList.prototype = new java_util_AbstractCollection;
_.add__Ljava_lang_Object_2Z = java_util_AbstractList_add__Ljava_lang_Object_2Z;
_.add__ILjava_lang_Object_2V = java_util_AbstractList_add__ILjava_lang_Object_2V;
_.equals__Ljava_lang_Object_2Z$ = java_util_AbstractList_equals__Ljava_lang_Object_2Z;
_.hashCode__I$ = java_util_AbstractList_hashCode__I;
_.iterator__Ljava_util_Iterator_2 = java_util_AbstractList_iterator__Ljava_util_Iterator_2;
_.remove__ILjava_lang_Object_2 = java_util_AbstractList_remove__ILjava_lang_Object_2;
_.java_lang_Object_typeId$ = 46;
function java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2Ljava_util_AbstractList$IteratorImpl_2(this$static, this$0){
  this$static.java_util_AbstractList$IteratorImpl_this$0 = this$0;
  return this$static;
}

function java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(this$static){
  return this$static.java_util_AbstractList$IteratorImpl_i < this$static.java_util_AbstractList$IteratorImpl_this$0.size__I();
}

function java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(this$static){
  if (this$static.java_util_AbstractList$IteratorImpl_i >= this$static.java_util_AbstractList$IteratorImpl_this$0.size__I()) {
    throw java_util_NoSuchElementException_$NoSuchElementException__Ljava_util_NoSuchElementException_2Ljava_util_NoSuchElementException_2(new java_util_NoSuchElementException);
  }
  return this$static.java_util_AbstractList$IteratorImpl_this$0.get__ILjava_lang_Object_2(this$static.java_util_AbstractList$IteratorImpl_last = this$static.java_util_AbstractList$IteratorImpl_i++);
}

function java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this$static){
  if (this$static.java_util_AbstractList$IteratorImpl_last < 0) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_IllegalStateException_2(new java_lang_IllegalStateException);
  }
  this$static.java_util_AbstractList$IteratorImpl_this$0.remove__ILjava_lang_Object_2(this$static.java_util_AbstractList$IteratorImpl_last);
  this$static.java_util_AbstractList$IteratorImpl_i = this$static.java_util_AbstractList$IteratorImpl_last;
  this$static.java_util_AbstractList$IteratorImpl_last = -1;
}

function java_util_AbstractList$IteratorImpl_hasNext__Z(){
  return this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$0.size__I();
}

function java_util_AbstractList$IteratorImpl_next__Ljava_lang_Object_2(){
  return java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(this);
}

function java_util_AbstractList$IteratorImpl_remove__V(){
  java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this);
}

function java_util_AbstractList$IteratorImpl(){
}

_ = java_util_AbstractList$IteratorImpl.prototype = new java_lang_Object;
_.hasNext__Z = java_util_AbstractList$IteratorImpl_hasNext__Z;
_.next__Ljava_lang_Object_2 = java_util_AbstractList$IteratorImpl_next__Ljava_lang_Object_2;
_.remove__V = java_util_AbstractList$IteratorImpl_remove__V;
_.java_lang_Object_typeId$ = 0;
_.java_util_AbstractList$IteratorImpl_i = 0;
_.java_util_AbstractList$IteratorImpl_last = -1;
_.java_util_AbstractList$IteratorImpl_this$0 = null;
function java_util_AbstractMap$1_$AbstractMap$1__Ljava_util_AbstractMap$1_2Ljava_util_AbstractMap$1_2(this$static, this$0, val$entrySet){
  this$static.java_util_AbstractMap$1_this$0 = this$0;
  this$static.java_util_AbstractMap$1_val$entrySet = val$entrySet;
  return this$static;
}

function java_util_AbstractMap$1_contains__Ljava_lang_Object_2Z(key){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$0, key);
}

function java_util_AbstractMap$1_iterator__Ljava_util_Iterator_2(){
  var java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0;
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0 = java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_AbstractHashMap$EntrySetIterator_2(new java_util_AbstractHashMap$EntrySetIterator, this.java_util_AbstractMap$1_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0) , java_util_AbstractMap$1$1_$AbstractMap$1$1__Ljava_util_AbstractMap$1$1_2Ljava_util_AbstractMap$1$1_2(new java_util_AbstractMap$1$1, java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0);
}

function java_util_AbstractMap$1_size__I(){
  return this.java_util_AbstractMap$1_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0.java_util_AbstractHashMap_size;
}

function java_util_AbstractMap$1(){
}

_ = java_util_AbstractMap$1.prototype = new java_util_AbstractSet;
_.contains__Ljava_lang_Object_2Z = java_util_AbstractMap$1_contains__Ljava_lang_Object_2Z;
_.iterator__Ljava_util_Iterator_2 = java_util_AbstractMap$1_iterator__Ljava_util_Iterator_2;
_.size__I = java_util_AbstractMap$1_size__I;
_.java_lang_Object_typeId$ = 47;
_.java_util_AbstractMap$1_this$0 = null;
_.java_util_AbstractMap$1_val$entrySet = null;
function java_util_AbstractMap$1$1_$AbstractMap$1$1__Ljava_util_AbstractMap$1$1_2Ljava_util_AbstractMap$1$1_2(this$static, val$outerIter){
  this$static.java_util_AbstractMap$1$1_val$outerIter = val$outerIter;
  return this$static;
}

function java_util_AbstractMap$1$1_hasNext__Z(){
  return java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(this.java_util_AbstractMap$1$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter);
}

function java_util_AbstractMap$1$1_next__Ljava_lang_Object_2(){
  var entry;
  entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_lang_Object_2(this.java_util_AbstractMap$1$1_val$outerIter);
  return entry.getKey__Ljava_lang_Object_2();
}

function java_util_AbstractMap$1$1_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this.java_util_AbstractMap$1$1_val$outerIter);
}

function java_util_AbstractMap$1$1(){
}

_ = java_util_AbstractMap$1$1.prototype = new java_lang_Object;
_.hasNext__Z = java_util_AbstractMap$1$1_hasNext__Z;
_.next__Ljava_lang_Object_2 = java_util_AbstractMap$1$1_next__Ljava_lang_Object_2;
_.remove__V = java_util_AbstractMap$1$1_remove__V;
_.java_lang_Object_typeId$ = 0;
_.java_util_AbstractMap$1$1_val$outerIter = null;
function java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2Ljava_util_ArrayList_2(this$static){
  this$static.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Object_12_1classLit, 63, 0, 0, 0);
  return this$static;
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_ArrayList_array, this$static.java_util_ArrayList_size++, o);
  return true;
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this$static, index, o){
  (index < 0 || index > this$static.java_util_ArrayList_size) && java_util_AbstractList_indexOutOfBounds__IIV(index, this$static.java_util_ArrayList_size);
  this$static.java_util_ArrayList_array.splice(index, 0, o);
  ++this$static.java_util_ArrayList_size;
}

function java_util_ArrayList_$clear__Ljava_util_ArrayList_2V(this$static){
  this$static.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Object_12_1classLit, 63, 0, 0, 0);
  this$static.java_util_ArrayList_size = 0;
}

function java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index){
  java_util_AbstractList_checkIndex__IIV(index, this$static.java_util_ArrayList_size);
  return this$static.java_util_ArrayList_array[index];
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, index){
  for (; index < this$static.java_util_ArrayList_size; ++index) {
    if (java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, this$static.java_util_ArrayList_array[index])) {
      return index;
    }
  }
  return -1;
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index){
  var previous;
  previous = (java_util_AbstractList_checkIndex__IIV(index, this$static.java_util_ArrayList_size) , this$static.java_util_ArrayList_array[index]);
  this$static.java_util_ArrayList_array.splice(index, 1);
  --this$static.java_util_ArrayList_size;
  return previous;
}

function java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static, out){
  var i, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_a_0, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_result_0;
  out.length < this$static.java_util_ArrayList_size && (out = (com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_a_0 = out , com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_result_0 = com_google_gwt_lang_Array_createFromSeed__IILcom_google_gwt_lang_Array_2(0, this$static.java_util_ArrayList_size) , com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2IILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_a_0.com_google_gwt_lang_Array_arrayClass$, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_a_0.java_lang_Object_typeId$, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_a_0.com_google_gwt_lang_Array_queryId$, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_result_0) , com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_result_0));
  for (i = 0; i < this$static.java_util_ArrayList_size; ++i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(out, i, this$static.java_util_ArrayList_array[i]);
  }
  out.length > this$static.java_util_ArrayList_size && com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(out, this$static.java_util_ArrayList_size, null);
  return out;
}

function java_util_ArrayList_add__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this.java_util_ArrayList_array, this.java_util_ArrayList_size++, o) , true;
}

function java_util_ArrayList_add__ILjava_lang_Object_2V(index, o){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this, index, o);
}

function java_util_ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0) != -1;
}

function java_util_ArrayList_get__ILjava_lang_Object_2(index){
  return java_util_AbstractList_checkIndex__IIV(index, this.java_util_ArrayList_size) , this.java_util_ArrayList_array[index];
}

function java_util_ArrayList_remove__ILjava_lang_Object_2(index){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index);
}

function java_util_ArrayList_size__I(){
  return this.java_util_ArrayList_size;
}

function java_util_ArrayList_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(out){
  return java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this, out);
}

function java_util_ArrayList(){
}

_ = java_util_ArrayList.prototype = new java_util_AbstractList;
_.add__Ljava_lang_Object_2Z = java_util_ArrayList_add__Ljava_lang_Object_2Z;
_.add__ILjava_lang_Object_2V = java_util_ArrayList_add__ILjava_lang_Object_2V;
_.contains__Ljava_lang_Object_2Z = java_util_ArrayList_contains__Ljava_lang_Object_2Z;
_.get__ILjava_lang_Object_2 = java_util_ArrayList_get__ILjava_lang_Object_2;
_.remove__ILjava_lang_Object_2 = java_util_ArrayList_remove__ILjava_lang_Object_2;
_.size__I = java_util_ArrayList_size__I;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = java_util_ArrayList_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 48;
_.java_util_ArrayList_size = 0;
function java_util_HashMap_$HashMap__Ljava_util_HashMap_2Ljava_util_HashMap_2(this$static){
  java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2V(this$static);
  return this$static;
}

function java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2);
}

function java_util_HashMap(){
}

_ = java_util_HashMap.prototype = new java_util_AbstractHashMap;
_.java_lang_Object_typeId$ = 49;
function java_util_HashSet_$HashSet__Ljava_util_HashSet_2Ljava_util_HashSet_2(this$static){
  this$static.java_util_HashSet_map = java_util_HashMap_$HashMap__Ljava_util_HashMap_2Ljava_util_HashMap_2(new java_util_HashMap);
  return this$static;
}

function java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  var old;
  old = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashSet_map, o, this$static);
  return old == null;
}

function java_util_HashSet_add__Ljava_lang_Object_2Z(o){
  var java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z_old_0;
  return java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z_old_0 = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_HashSet_map, o, this) , java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z_old_0 == null;
}

function java_util_HashSet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_HashSet_map, o);
}

function java_util_HashSet_iterator__Ljava_util_Iterator_2(){
  var java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0;
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0 = java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_AbstractHashMap$EntrySetIterator_2(new java_util_AbstractHashMap$EntrySetIterator, java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2Ljava_util_Set_2(this.java_util_HashSet_map).java_util_AbstractMap$1_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0) , java_util_AbstractMap$1$1_$AbstractMap$1$1__Ljava_util_AbstractMap$1$1_2Ljava_util_AbstractMap$1$1_2(new java_util_AbstractMap$1$1, java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0);
}

function java_util_HashSet_size__I(){
  return this.java_util_HashSet_map.java_util_AbstractHashMap_size;
}

function java_util_HashSet(){
}

_ = java_util_HashSet.prototype = new java_util_AbstractSet;
_.add__Ljava_lang_Object_2Z = java_util_HashSet_add__Ljava_lang_Object_2Z;
_.contains__Ljava_lang_Object_2Z = java_util_HashSet_contains__Ljava_lang_Object_2Z;
_.iterator__Ljava_util_Iterator_2 = java_util_HashSet_iterator__Ljava_util_Iterator_2;
_.size__I = java_util_HashSet_size__I;
_.java_lang_Object_typeId$ = 50;
_.java_util_HashSet_map = null;
function java_util_MapEntryImpl_$MapEntryImpl__Ljava_util_MapEntryImpl_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_util_MapEntryImpl_2(this$static, key, value){
  this$static.java_util_MapEntryImpl_key = key;
  this$static.java_util_MapEntryImpl_value = value;
  return this$static;
}

function java_util_MapEntryImpl_getKey__Ljava_lang_Object_2(){
  return this.java_util_MapEntryImpl_key;
}

function java_util_MapEntryImpl_getValue__Ljava_lang_Object_2(){
  return this.java_util_MapEntryImpl_value;
}

function java_util_MapEntryImpl_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value){
  var old;
  old = this.java_util_MapEntryImpl_value;
  this.java_util_MapEntryImpl_value = value;
  return old;
}

function java_util_MapEntryImpl(){
}

_ = java_util_MapEntryImpl.prototype = new java_util_AbstractMapEntry;
_.getKey__Ljava_lang_Object_2 = java_util_MapEntryImpl_getKey__Ljava_lang_Object_2;
_.getValue__Ljava_lang_Object_2 = java_util_MapEntryImpl_getValue__Ljava_lang_Object_2;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = java_util_MapEntryImpl_setValue__Ljava_lang_Object_2Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 51;
_.java_util_MapEntryImpl_key = null;
_.java_util_MapEntryImpl_value = null;
function java_util_NoSuchElementException_$NoSuchElementException__Ljava_util_NoSuchElementException_2Ljava_util_NoSuchElementException_2(this$static){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_util_NoSuchElementException(){
}

_ = java_util_NoSuchElementException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_typeId$ = 52;
function java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b){
  return (a == null?null:a) === (b == null?null:b) || a != null && com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b);
}

function java_util_Vector_$Vector__Ljava_util_Vector_2Ljava_util_Vector_2(this$static){
  this$static.java_util_Vector_arrayList = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2Ljava_util_ArrayList_2(new java_util_ArrayList);
  return this$static;
}

function java_util_Vector_add__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this.java_util_Vector_arrayList, o);
}

function java_util_Vector_add__ILjava_lang_Object_2V(index, o){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this.java_util_Vector_arrayList, index, o);
}

function java_util_Vector_contains__Ljava_lang_Object_2Z(elem){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this.java_util_Vector_arrayList, elem, 0) != -1;
}

function java_util_Vector_get__ILjava_lang_Object_2(index){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_Vector_arrayList, index);
}

function java_util_Vector_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl, this.java_util_Vector_arrayList);
}

function java_util_Vector_remove__ILjava_lang_Object_2(index){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_Vector_arrayList, index);
}

function java_util_Vector_size__I(){
  return this.java_util_Vector_arrayList.java_util_ArrayList_size;
}

function java_util_Vector_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(a){
  return java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this.java_util_Vector_arrayList, a);
}

function java_util_Vector(){
}

_ = java_util_Vector.prototype = new java_util_AbstractList;
_.add__Ljava_lang_Object_2Z = java_util_Vector_add__Ljava_lang_Object_2Z;
_.add__ILjava_lang_Object_2V = java_util_Vector_add__ILjava_lang_Object_2V;
_.contains__Ljava_lang_Object_2Z = java_util_Vector_contains__Ljava_lang_Object_2Z;
_.get__ILjava_lang_Object_2 = java_util_Vector_get__ILjava_lang_Object_2;
_.iterator__Ljava_util_Iterator_2 = java_util_Vector_iterator__Ljava_util_Iterator_2;
_.remove__ILjava_lang_Object_2 = java_util_Vector_remove__ILjava_lang_Object_2;
_.size__I = java_util_Vector_size__I;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = java_util_Vector_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 53;
_.java_util_Vector_arrayList = null;
var $entry = com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(com_google_gwt_lang_EntryMethodHolder_init__V)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(com_google_gwt_lang_EntryMethodHolder_init__V)();
  }
}

var com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit = new java_lang_Class, com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1StackTraceElement_12_1classLit = new java_lang_Class, com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Throwable_12_1classLit = new java_lang_Class, com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit = new java_lang_Class, com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Object_12_1classLit = new java_lang_Class;
$stats && $stats({moduleName:'alternateburndown',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if (alternateburndown) alternateburndown.onScriptLoad(gwtOnLoad);
})();
