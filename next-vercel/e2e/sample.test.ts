import {Selector} from 'testcafe';

//declare const test: TestFn

fixture('HOTEL PLANISPHERE').page(`http://localhost:3000/about`);


test('必須項目を入力し送信', async t => {
  await t.maximizeWindow()
 // await t.click(Selector('button').withText('Text'))


  const fooText = Selector('#uh');

  await t.expect(fooText.innerText).eql('#uh');  
})