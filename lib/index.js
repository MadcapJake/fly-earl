
'use strict';require('earlgrey-runtime/6');let $targ$2;let eg$0;let plugin$0;eg$0=require("earlgrey");plugin$0=(function plugin(){let $targ$0;$targ$0=(function(opts$0){let $it$1;let $it$0;return (($it$0=this),($it$1=$it$0.filter((function(data$0){let t0$0;let rval$0;let $targ$1;let $it$2;let self$0;$targ$1=this;t0$0=$targ$1;$it$2=t0$0;self$0=t0$0;[$it$2,self$0];rval$0=false;try{return eg$0.Generator().generate(eg$0.Source(data$0,data$0.url));rval$0;}catch(excv$0){let err$0;err$0=excv$0;rval$0=this.notify("plugin_error",({"plugin":"earlGrey","error":err$0}));rval$0;}return rval$0;}))),$it$1.notify("plugin_run",({"plugin":"earlGrey"})));});(this["earl"]=$targ$0);return (void 0);});$targ$2=plugin$0;(exports["plugin"]=$targ$2);(void 0);
//# sourceMappingURL=index.js.map

