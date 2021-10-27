import React from 'react';

import { ContainerWithSidebar } from './index';

export default {
    title: 'ContainerWithSidebar',
    component: ContainerWithSidebar,
}

export const Default = () => <ContainerWithSidebar sidebarTitle ="Filters & Refine" sidebar={"Sidebar Content"} content={"Main Content"} />