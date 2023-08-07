import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react'

export const ToggleDropdown = ({ todayHourlyForecast }) => {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button>
          By the hour
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items>
          <div 
          // className="absolute top-0 right-0 bg-white border border-gray-300 p-4 shadow-md mt-2 rounded-lg"
          >
            {todayHourlyForecast &&
              todayHourlyForecast.map((hour) => (
                <Menu.Item>
                  <div>
                    {hour.datetime} {hour.temp}&deg;
                  </div>
                </Menu.Item>
              ))
            }
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
