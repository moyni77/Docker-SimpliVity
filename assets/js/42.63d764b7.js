(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{324:function(e,t,o){"use strict";o.r(t);var i=o(0),n=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"editing-the-inventory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#editing-the-inventory","aria-hidden":"true"}},[e._v("#")]),e._v(" Editing the inventory")]),e._v(" "),o("p",[e._v("The inventory is the file named "),o("code",[e._v("vm_hosts")]),e._v(" in the "),o("code",[e._v("~/Docker-SimpliVity")]),e._v(" directory. You need to edit this file to describe the configuration you want to deploy.")]),e._v(" "),o("p",[e._v("The nodes inside the inventory are organized in groups. The groups are defined by brackets and the group names are static so they must not be changed. Other fields (hostnames, specifications, IP addresses…) are edited to match your setup. The groups are as follows:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("[ucp_main]")]),e._v(": A group containing one single node which will be the main UCP node and swarm leader. Do not add more than one node under this group.")]),e._v(" "),o("li",[o("code",[e._v("[ucp]")]),e._v(": A group containing all the UCP nodes, including the main UCP node. Typically you should have either 3 or 5 nodes under this group.")]),e._v(" "),o("li",[o("code",[e._v("[dtr_main]")]),e._v(": A group containing one single node which will be the first DTR node to be installed. Do not add more than one node under this group.")]),e._v(" "),o("li",[o("code",[e._v("[dtr]")]),e._v(": A group containing all the DTR nodes, including the main DTR node. Typically you should have either 3 or 5 nodes under this group.")]),e._v(" "),o("li",[o("code",[e._v("[worker]")]),e._v(": A group containing all the Linux worker nodes.")]),e._v(" "),o("li",[o("code",[e._v("[win_worker]")]),e._v(": A group containing all the Windows worker nodes.")]),e._v(" "),o("li",[o("code",[e._v("[nfs]")]),e._v(": A group containing one single node which will be the NFS node. Do not add more than one node under this group.")]),e._v(" "),o("li",[o("code",[e._v("[logger]")]),e._v(": A group containing one single node which will be the logger node. Do not add more than one node under this group.")]),e._v(" "),o("li",[o("code",[e._v("[local]")]),e._v(": A group containing the local Ansible host. It contains an entry that should not be modified.")])]),e._v(" "),o("p",[e._v("If you are deploying the new "),o("code",[e._v("active-active")]),e._v(" load balancers, using floating IPs managed by "),o("code",[e._v("keepalived")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("[loadbalancer]")]),e._v(": A group containing the UCP, DTR and any worker load balancers you are deploying.")])]),e._v(" "),o("p",[e._v("If you are using the legacy, standalone load balancers:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("[ucp_lb]")]),e._v(": A group containing one single node which will be the load balancer for the UCP nodes. Do not add more than one node under this group.")]),e._v(" "),o("li",[o("code",[e._v("[dtr_lb]")]),e._v(": A group containing one single node which will be the load balancer for the DTR nodes. Do not add more than one node under this group.")]),e._v(" "),o("li",[o("code",[e._v("[worker_lb]")]),e._v(": A group containing one single node which will be the load balancer for the worker nodes. Do not add more than one node under this group.")]),e._v(" "),o("li",[o("code",[e._v("[lbs]")]),e._v(": A group containing all the legacy standalone load balancers. This group will have 3 nodes, also defined individually in the three groups above.")])]),e._v(" "),o("p",[e._v("There are also a few special groups:")]),e._v(" "),o("ul",[o("li",[e._v("[docker:children]: A group of groups including all the nodes where Docker will be installed.")]),e._v(" "),o("li",[e._v("[vms:children]: A group of groups including all the Virtual Machines involved, with the exception of the local host.")])]),e._v(" "),o("p",[e._v("Finally, you will find some variables defined for each group:")]),e._v(" "),o("ul",[o("li",[e._v("[vms:vars]: A set of variables defined for all VMs. Currently only the size of the boot disk is defined here.")]),e._v(" "),o("li",[e._v("[ucp:vars]: A set of variables defined for all nodes in the ["),o("code",[e._v("ucp")]),e._v("] group.")]),e._v(" "),o("li",[e._v("[dtr:vars]: A set of variables defined for all nodes in the ["),o("code",[e._v("dtr")]),e._v("] group.")]),e._v(" "),o("li",[e._v("[worker:vars]: A set of variables defined for all nodes in the ["),o("code",[e._v("worker")]),e._v("] group.")]),e._v(" "),o("li",[e._v("[win_worker:vars]: A set of variables defined for all nodes in the ["),o("code",[e._v("win_worker")]),e._v("] group.")]),e._v(" "),o("li",[e._v("[loadbalancer:vars]: A set of variables defined for all nodes in the ["),o("code",[e._v("loadbalancer")]),e._v("] group.")]),e._v(" "),o("li",[e._v("[lbs:vars]: A set of variables defined for all nodes in the ["),o("code",[e._v("lbs")]),e._v("] group.")]),e._v(" "),o("li",[e._v("[nfs:vars]: A set of variables defined for all nodes in the ["),o("code",[e._v("nfs")]),e._v("] group.")]),e._v(" "),o("li",[e._v("[logger:vars]: A set of variables defined for all nodes in the ["),o("code",[e._v("logger")]),e._v("] group.")])]),e._v(" "),o("p",[e._v("If you wish to configure your nodes with different specifications to the ones defined by the group, it is possible to declare the same variables at the node level, overriding the group value. For instance, you could have one of your workers with higher specifications by setting:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("[worker] \nworker01 ip_addr='10.0.0.10/16' esxi_host='esxi1.domain.local' \nworker02 ip_addr='10.0.0.11/16' esxi_host='esxi1.domain.local' \nworker03 ip_addr='10.0.0.12/16' esxi_host='esxi1.domain.local' cpus='16' ram'32768' \n\n[worker:vars] \ncpus='4' ram='16384' disk2_size='200'\n")])])]),o("p",[e._v("In the example above, the "),o("code",[e._v("worker03")]),e._v(" node would have 4 times more CPU and double the RAM compared to the rest of the worker nodes.")]),e._v(" "),o("p",[e._v("The different variables you can use are described in the table below. They are all mandatory unless otherwise specified.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Scope")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("ip_addr")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Node")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("IP address in CIDR format to be given to a node")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("esxi_host")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Node")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("ESXi host where the node will be deployed. If the cluster is configured with DRS, this option will be overridden")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("cpus")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Node/Group")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Number of CPUs to assign to a VM or a group of VMs")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("ram")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Node/Group")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Amount of RAM in MB to assign to a VM or a group of VMs")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("disk2_size")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Node/Group")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Size of the second disk in GB to attach to a VM or a group of VMs. This variable is only mandatory on Docker nodes (UCP, DTR, worker) and NFS node. It is not required for the logger node or the load balancers.")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("node_policy")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Node/Group")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("HPE SimpliVity backup policy to assign to a VM or a group of VMs. The name has to match one of the backup policies defined in the "),o("code",[e._v("group_vars/vars")]),e._v(" file described in the section "),o("code",[e._v("HPE SimpliVity backup configuration")]),e._v(".")])])])])])}],!1,null,null,null);n.options.__file="edit-inventory.md";t.default=n.exports}}]);