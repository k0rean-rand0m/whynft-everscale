import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GameEvents = ({ onPopup }) => {
  return (
    <div className="container">
      <div className="shadow_left">
        <img src="./img/shadow.svg" alt="" />
      </div>
      <div className="shadow_right">
        <img src="./img/shadow.svg" alt="" />
      </div>
      <div className="stat_block">
        <div className="title title_group">
          <span>Game events</span>
        </div>
        <div className="stat_block_content">
          {[
            { name: 'Planted 2 earth plants', icon: 'plus', className: 'stat_block_item_title_orange' },
            { name: '1 military vehicle destroyed', icon: 'minus', className: 'stat_block_item_title_purple' },
            { name: '2 mining machine destroyed', icon: 'plus', className: 'stat_block_item_title_brown' },
            { name: '1 Industrial building destroyed', icon: 'minus', className: 'stat_block_item_title_metal' },
            { name: 'Planted 7 earth plants', icon: 'minus', className: 'stat_block_item_title_green' },
            { name: 'Planted 6 earth plants', icon: 'plus', className: 'stat_block_item_title_green' },
            { name: 'Planted 5 earth plants', icon: 'plus', className: 'stat_block_item_title_green' },
            { name: 'Planted 4 earth plants', icon: 'plus', className: 'stat_block_item_title_green' },
            { name: 'Planted 3 earth plants', icon: 'plus', className: 'stat_block_item_title_green' },
            { name: 'Planted 2 earth plants', icon: 'plus', className: 'stat_block_item_title_green' },
          ].map((item) => (
            <div className="stat_block_item" key={item.name}>
              <div className="stat_block_item_title">
                <FontAwesomeIcon
                  icon={item.icon === 'plus' ? ['far', 'circle-dot'] : ['far', 'circle']}
                  style={item.icon === 'plus' ? { padding: '0 10px', color: '#168c4d' } : { padding: '0 10px' }}
                />
                <span>{item.name}</span>
                <span>{item.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameEvents;