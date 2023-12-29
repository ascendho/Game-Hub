import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {
  const sortOrders = [
    { value: '', label: '相关性' },
    { value: '-added', label: '添加日期' },
    { value: 'name', label: '名称' },
    { value: '-released', label: '发布日期' },
    { value: '-metacritic', label: '受欢迎度' },
    { value: '-rating', label: '平均评分' },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore(
    (s) => s.gameQuery.sortOrder
  );
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        排序: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
