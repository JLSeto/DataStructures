export function assertEquals(result : any, expected : any)
{
    if(typeof result == typeof expected)
    {
        if(result != expected)
        {
            throw new Error("Expected Value: " + expected + ", Received: " + result);
        }
        else
        {
            console.log("TEST PASSED: " + result);
        }
    }
    else
    {
        throw new Error("Expected Type: " + typeof expected + ", Received: " + typeof result);
    }
}