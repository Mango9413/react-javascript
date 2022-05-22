import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('Async components', ()=>{
    test('renders posts if request succeeds', async ()=>{
        window.fetch = jest.fn();
        //overwrite the original fetch function and return test data
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        })
        render(<Async/>)

        //不可以用getByRole如果返回结果超过1个
        //getAllByRole不能等request返回，直接给出错误
        const listItemElements = await screen.findAllByRole('listitem')
        //期望返回结果不是0
        expect(listItemElements).not.toHaveLength(0)
    })
})

//don't want to send a real request
//send some fake request to testing server
//只希望测试获得的结果能否成功render到页面，不希望测试fetch是否能正常send request