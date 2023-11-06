import { render, fireEvent } from "@testing-library/react";
import Home from "../page";

describe("Speed Test", () => {
 it("measures button response time", async () => {
   const { getByText } = render(<Home />);
   const button = getByText("Test Speed");

   const startTime = performance.now();
   await fireEvent.click(button);
   const endTime = performance.now();

   const responseTime = endTime - startTime;
   console.log(`Button response time: ${responseTime} ms`);
 });
});
