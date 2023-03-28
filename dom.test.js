import addDiv from './dom';
import $ from 'jquery';

test('测试 addDiv', () => {
  addDiv();
  addDiv();
  console.log($('body').find('div').length);

  // 测试dom
  expect($('body').find('div').length).toBe(2);
  expect(document.getElementsByTagName('div').length).toBe(2);
})

// jest 实际上运行环境为 node，因为 jest 在 node 的环境下自己模拟了一套 dom，称为 jsDom