(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{45:function(e,t,r){"use strict";r.r(t);var a=r(10),n=r(9),i=r.n(n),u=r(18),o=r.n(u),s=r(0),d=r(3),c=r(1),l=r(2),m=r(16),p=r(23),f=(r(42),r(43),r(44),r(48)),h=r(49),_=r(50),g=r(51),v=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(e){var n,i=this;return Object(s.a)(this,r),(n=t.call(this,e)).frame_dtypes=void 0,n.gridOptions=void 0,n.gridData=void 0,n.api=void 0,n.columnApi=void 0,n.columnFormaters=void 0,n.manual_update_requested=void 0,n.render=function(){var e=Object.assign({},n.columnFormaters,n.gridOptions,{rowData:n.gridData});return Object(a.jsxs)("div",{className:"ag-theme-balham",style:{height:n.props.args.height,width:"100%"},children:[Object(a.jsx)(i.ManualUpdateButton,{manual_update:n.manual_update_requested,onClick:function(e){return n.returnGridValue(e)}}),Object(a.jsx)(p.AgGridReact,{onGridReady:function(e){return n.onGridReady(e)},onFirstDataRendered:function(e){return n.firstDataRendered(e)},gridOptions:e})]})},n.frame_dtypes=e.args.frame_dtypes,n.gridData=JSON.parse(e.args.gridData),n.gridOptions=e.args.gridOptions,n.manual_update_requested=1===e.args.update_mode,n.columnFormaters={columnTypes:{dateColumnFilter:{filter:"agDateColumnFilter",filterParams:{comparator:function(e,t){return Object(f.a)(Object(h.a)(t),e)}}},numberColumnFilter:{filter:"agNumberColumnFilter"},shortDateTimeFormat:{valueFormatter:function(e){return n.date_formater(e.value,"dd/MM/yyyy HH:mm")}},customDateTimeFormat:{valueFormatter:function(e){return n.date_formater(e.value,e.column.colDef.custom_format_string)}},customNumericFormat:{valueFormatter:function(e){return n.number_formater(e.value,e.column.colDef.precision)}},customCurrencyFormat:{valueFormatter:function(e){return n.currency_formater(e.value,e.column.colDef.custom_currency_symbol)}}}},n}return Object(d.a)(r,[{key:"set_update_mode",value:function(){var e=this;if(!this.manual_update_requested){var t=this.props.args.update_mode;2===(2&t)&&this.api.addEventListener("cellValueChanged",(function(t){return e.returnGridValue(t)})),4===(4&t)&&this.api.addEventListener("selectionChanged",(function(t){return e.returnGridValue(t)})),8===(8&t)&&this.api.addEventListener("filterChanged",(function(t){return e.returnGridValue(t)})),16===(16&t)&&this.api.addEventListener("sortChanged",(function(t){return e.returnGridValue(t)}))}}},{key:"onGridReady",value:function(e){this.api=e.api,this.columnApi=e.columnApi,this.set_update_mode()}},{key:"firstDataRendered",value:function(e){this.props.args.fit_columns_on_grid_load?this.api.sizeColumnsToFit():this.columnApi.autoSizeAllColumns()}},{key:"date_formater",value:function(e,t){var r=e;return Object(_.a)(e)&&(r=Object(g.a)(Object(h.a)(e),t)),r}},{key:"currency_formater",value:function(e,t){return e?t+e.toFixed(2):e.toString()}},{key:"number_formater",value:function(e,t){return e?e.toFixed(t):e.toString()}},{key:"returnGridValue",value:function(e){var t=[];switch(this.props.args.data_return_mode){case 0:this.api.forEachLeafNode((function(e){return t.push(e.data)}));break;case 1:this.api.forEachNodeAfterFilter((function(e){e.group||t.push(e.data)}));break;case 2:this.api.forEachNodeAfterFilterAndSort((function(e){e.group||t.push(e.data)}))}var r={original_dtypes:this.frame_dtypes,gridData:t,selectedRows:this.api.getSelectedRows()};m.a.setComponentValue(r)}},{key:"ManualUpdateButton",value:function(e){return e.manual_update?Object(a.jsx)("button",{onClick:e.onClick,children:"Save"}):Object(a.jsx)("span",{})}}]),r}(m.b),b=Object(m.c)(v);o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.525105c0.chunk.js.map