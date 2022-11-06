import React from "react";

class Project15 extends React.Component {
  render() {
    return (
      <div className="project">
        <h3>Project 15: Task 1: Memoisation</h3>
        <pre>
          {`
            function heavyFunction(num) {
                for (let i = 0; i < 1000000000; i++) {}
                return num;
            }
            
            const res = {};
            
            function memoise(num) {
                if (res[num]) return res[num];
                return res[num] = heavyFunction(num);;
            }
            `}
        </pre>

        <h3>Project 15: Task 2: Infinite currying</h3>
        <pre>
          {`
            let add = function (a) {
                return function (b) {
                    if(b) return fun(a+b);
                    return a;
                }
            }

            console.log(add(2)(3)(4)(5)()); // 14
            `}
        </pre>
      </div>
    );
  }
}

export default Project15;
