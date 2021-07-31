export function assertEquals(result : any, expected : any)
{
    if(typeof result == typeof expected)
    {
        if(result != expected)
        {
            console.error("TEST FAILED: Expected Value: " + expected + ", Received: " + result);
        }
        else
        {
            console.log("TEST PASSED: Expected Value: " + expected + ", Received: " + result);
        }
    }
    else
    {
        let x: string = "TEST FAILED: Expected Type: " + (typeof expected) + ", Received: " + (typeof result);
        console.error(x);
    }
}