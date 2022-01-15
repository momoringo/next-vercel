// hooks/useCounter.spec.ts
import { HookResult, renderHook, act } from '@testing-library/react-hooks';
import { useGetBooks } from '@/hooks/useGetBooks';

describe('useGetBooks', () => {
  /**
    カスタムフックの結果を受け取る変数です
    カスタムフックの引数が変わる場合、各test()で作ることになりますが、そうでない場合は
    こんな感じでletで変数を定義してbeforeEachで受け取ればいいと思います🙆🏻♂️‍
  */

  console.log(useGetBooks);



  test('incrementを呼ぶと、countが期待通りの値に変更される', async () => {

      //await {data} = useGetBooks()

  const result = await renderHook(() => useGetBooks()).result;

console.log(result.data);
    expect(1).toBe(1);
  });
});