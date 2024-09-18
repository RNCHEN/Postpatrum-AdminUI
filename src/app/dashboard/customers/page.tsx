import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import type { Customer } from '@/components/dashboard/customer/customers-table';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

const customers = [
  {
    id: 'USR-010',
    name: '陈伟',
    avatar: '/assets/avatar-10.png',
    email: 'wei.chen@devias.io',
    phone: '908-691-3242',
    address: { city: '北京', country: '中国', state: '北京市', street: '朝阳区三里屯街道4158号' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    gender:'男'
  },
  {
    id: 'USR-009',
    name: '张伟',
    avatar: '/assets/avatar-9.png',
    email: 'wei.zhang@devias.io',
    phone: '415-907-2647',
    address: { city: '上海', country: '中国', state: '上海市', street: '黄浦区人民路2188号' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
     gender:'男'
  },
  {
    id: 'USR-008',
    name: '李娜',
    avatar: '/assets/avatar-8.png',
    email: 'na.li@devias.io',
    phone: '770-635-2682',
    address: { city: '广州', country: '中国', state: '广东省', street: '天河区体育东路4894号' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
     gender:'女'
  },
  {
    id: 'USR-007',
    name: '王芳',
    avatar: '/assets/avatar-7.png',
    email: 'fang.wang@devias.io',
    phone: '801-301-7894',
    address: { city: '深圳', country: '中国', state: '广东省', street: '福田区深南大道368号' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    gender:'女'
  },
  {
    id: 'USR-006',
    name: '刘强',
    avatar: '/assets/avatar-6.png',
    email: 'qiang.liu@devias.io',
    phone: '313-812-8947',
    address: { city: '杭州', country: '中国', state: '浙江省', street: '西湖区文三路3934号' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    gender:'女'
  },
  {
    id: 'USR-005',
    name: '赵磊',
    avatar: '/assets/avatar-5.png',
    email: 'lei.zhao@devias.io',
    phone: '712-351-5711',
    address: { city: '成都', country: '中国', state: '四川省', street: '锦江区春熙路1865号' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    gender:'女'
  },
  {
    id: 'USR-004',
    name: '孙杨',
    avatar: '/assets/avatar-4.png',
    email: 'yang.sun@devias.io',
    phone: '858-602-3409',
    address: { city: '南京', country: '中国', state: '江苏省', street: '鼓楼区中山路317号' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    gender:'女'
  },
  {
    id: 'USR-003',
    name: '周敏',
    avatar: '/assets/avatar-3.png',
    email: 'min.zhou@devias.io',
    phone: '304-428-3097',
    address: { city: '武汉', country: '中国', state: '湖北省', street: '江汉区江汉路2849号' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    gender:'女'
  },
  {
    id: 'USR-002',
    name: '杨洋',
    avatar: '/assets/avatar-2.png',
    email: 'yang.yang@devias.io',
    phone: '702-661-1654',
    address: { city: '重庆', country: '中国', state: '重庆市', street: '渝中区解放碑1798号' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    gender:'女'
  },
  {
    id: 'USR-001',
    name: '黄伟',
    avatar: '/assets/avatar-1.png',
    email: 'wei.huang@devias.io',
    phone: '972-333-4106',
    address: { city: '西安', country: '中国', state: '陕西省', street: '碑林区南大街75247号' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    gender:'女'
  },
] satisfies Customer[];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  // const paginatedCustomers = applyPagination(customers, page, rowsPerPage);
  const paginatedCustomers = customers;

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Customers</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button>
            Export the selected items
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <CustomersTable
        count={paginatedCustomers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
