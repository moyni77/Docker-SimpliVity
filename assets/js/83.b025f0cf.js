(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{252:function(e,t,i){"use strict";i.r(t);var s=i(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("Before you start deployment, you must assemble the information required to assign values for each and every variable used by the playbooks. The variables are fully documented in the section TODO LINK. A brief overview of the information required is presented in the table below.")]),e._v(" "),i("table",[e._m(1),e._v(" "),i("tbody",[e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[e._v("Docker Prerequisites")]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("You will need a URL for the official Docker EE software download and a license file. Refer to the Docker documentation to learn more about this URL and the licensing requirements at: "),i("a",{attrs:{href:"https://docs.docker.com/engine/installation/linux/docker-ee/rhel/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/installation/linux/docker-ee/rhel/"),i("OutboundLink")],1),e._v(" in the section entitled “Docker EE repository URL”")])]),e._v(" "),e._m(8)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"verify-prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verify-prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Verify prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[this._v("Component")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("Details")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("Virtual Infrastructure")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("The FQDN of your vCenter server and the name of the Datacenter. You will also need administrator credentials in order to create templates and spin up virtual machines.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("HPE SimpliVity Cluster")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("The name of the HPE SimpliVity cluster and the names of the members of this cluster as they appear in vCenter. You will also need to know the name of the HPE SimpliVity datastore where you want to land the various virtual machines. You may have to create this datastore if you just installed your HPE SimpliVity cluster. In addition, you will need the IP addresses of the OmniStack virtual machines. Finally you will need credentials with admin capabilities for using the OmniStack API. These credentials are typically the same as your vCenter administrator credentials.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("L3 Network requirements")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("You will need one IP address for each and every VM configured in the Ansible inventory (see the section TODO LINK). The recommended minimal deployment (Linux-only) configures 13 virtual machines so you would need to allocate 13 IP addresses to use this example inventory. You will also need to allocate at least 2 additional addresses for the virtual IPs used by the UCP and DTR loadbalancers. If you have a hybrid environment with Windows workers, you will need to increase the allocation based on the number of workers. Note that "),t("strong",[this._v("the Ansible playbooks do not support DHCP")]),this._v(" so you need static IP addresses. All the IPs should be in the same subnet. You will also have to specify the size of the subnet (for example /22 or /24) and the L3 gateway for this subnet.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("DNS")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("You will need to know the IP addresses of your DNS server. In addition, all the VMs you configure in the inventory must have their names registered in DNS prior to deployment. In addition, you will need to know the domain name to use for configuring the virtual machines (such as "),t("code",[this._v("example.com")]),this._v(")")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("NTP Services")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("You need time services configured in your environment. The deployed solution uses certificates that are time-sensitive. You will need to specify the IP addresses of your time servers (NTP).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("RHEL Subscription")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("A RHEL subscription is required to pull extra packages that are not on the DVD.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("Proxy")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("The playbooks pull the Docker packages from the Internet. If your environment accesses the Internet through a proxy, you will need the details of the proxy including the fully qualified domain name and the port number.")])])}],!1,null,null,null);n.options.__file="verify-prereqs.md";t.default=n.exports}}]);