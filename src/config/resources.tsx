import { DashboardOutlined, ProjectOutlined, UserOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "students",
    list: "/students",
    show: "/students/:id",
    create: "/students/new",
    edit: "/students/edit/:id",
    meta: {
      label: "Beneficiaries",
      icon: <UserOutlined />,
    },
  },
  {
    name: "tasks",
    list: "/tasks",
    create: "/tasks/new",
    edit: "/tasks/edit/:id",
    meta: {
      label: "Tasks",
      icon: <ProjectOutlined />,
    },
  },
];