import {ComponentB} from './ComponentB';

export function ComponentA() {
    return (
        <div>
            <h2>Component A</h2>
            <ComponentB />
        </div>
    );
}