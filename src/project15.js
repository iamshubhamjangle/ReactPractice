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
                if (res[num]) {
                    console.log('memoised')
                    return res[num];
                }
            
                res[num] = heavyFunction(num);
                return res[num];
            }
            `}
        </pre>

        <h3>Project 15: Task 2: Infinite currying</h3>
        <pre>
          {`
            function add(a) {
                function add(b) {
                    if(b) return add(a+b);
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
