(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{418:function(s,a,t){"use strict";t.r(a);var e=t(45),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"working-with-non-default-ssh-key-pair-paths"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#working-with-non-default-ssh-key-pair-paths"}},[s._v("#")]),s._v(" Working with non-default SSH key pair paths")]),s._v(" "),t("p",[s._v("Run below command in folder:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("ssh-agent -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\nssh-add ~/.ssh/other_id_rsa\n")])])]),t("p",[s._v("Or run this:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config core.sshCommand "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ssh -o IdentitiesOnly=yes -i ~/.ssh/private-key-filename-for-this-repository -F /dev/null"')]),s._v("\n")])])]),t("p",[s._v('git config core.sshCommand "ssh -o IdentitiesOnly=yes -i ~/.ssh/thongvv -F /dev/null"')])])}),[],!1,null,null,null);a.default=n.exports}}]);