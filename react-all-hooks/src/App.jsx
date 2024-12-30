import UseStateDemo from './use-state/useStateDemo.jsx'
import Counter from './use-state/counter.jsx'
import Counter2 from './use-state/counter2.jsx'
import UpdateObjects from './use-state/updateObjects.jsx'
import UseEffectDemo1 from './use-effect/useEffectDemo1.jsx'
import UseEffectDemo2 from './use-effect/useEffectDemo2.jsx'
import ContextDemoA from './use-context/ContextDemoA.jsx'
import RefDemo from './use-ref/RefDemo.jsx'
import StateExample from './use-state/StateExample.jsx'
import EffectExample from './use-effect/EffectExample.jsx'
import BeforeContextExample from './use-context/BeforeContextExample.jsx'
import ContextExample from './use-context/ContextExample.jsx'
import BeforeReducerDemo from './use-reducer/BeforeReducerDemo.jsx'
import ReducerDemo from './use-reducer/ReducerDemo.jsx'
import RefExample from './use-ref/RefExample.jsx'
import ImperativeHandle from './use-imperative-handle/ImperativeHandle.jsx'
import LayoutEffect from './use-layout-effect/LayoutEffect.jsx'
import DeferredValueExample from './use-deferred-value/DeferredValue.jsx'
import SyncExternalStoreExample from './use-sync-external-store/SyncExternalStore.jsx'
import InsertionEffect from './use-insertion-effect/InsertionEffect.jsx'
import UseIdExample from './use-id/UseId.jsx'
import TransitionExample from './use-transition/Transition.jsx'
import BeforeSyncExternalStoreExample from './use-sync-external-store/BeforeSyncExternalStore.jsx'
import BeforeMemo from './use-memo/BeforeMemo.jsx'
import MemoDemo from './use-memo/MemoDemo.jsx'
import BeforeCallback from './use-callback/BeforeCallback.jsx'
import CallbackDemo from './use-callback/CallbackDemo.jsx'
import Search from './use-callback/Search.jsx'
import IntervalProblem from './custom_hooks/interval/IntervalProblem.jsx'
import IntervalProblem2 from './custom_hooks/interval/IntervalProblem2.jsx'
import UseIntervalDemo from './custom_hooks/interval/UseInterval.jsx'
import DataFetchDemo1 from './data-fetching/demo1/DataFetching.jsx'
import DataFetchDemo2 from './data-fetching/demo2/DataFetching2.jsx'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ContainerPresentational from './react-design-patterns/container-presentational/ContainerPresentational.jsx'
import Stopwatch from './react-design-patterns/custom-hook/components/Stopwatch.jsx'
import Countdown from './react-design-patterns/custom-hook/components/Countdown.jsx'
import Profile from './react-design-patterns/high-order-component/components/Profile.jsx'
import Dashboard from './react-design-patterns/high-order-component/components/Dashboard.jsx'
import withAuth from './react-design-patterns/high-order-component/hoc/withAuth.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// const queryClient = new QueryClient()

function App() {
  const AuthenticatedDashboard = withAuth(Dashboard);
  const AuthenticatedProfile = withAuth(Profile);

  return (
    <>

      {/* UseState */}
      {/* <UseStateDemo></UseStateDemo> */}
      {/* <Counter></Counter> */}
      {/* <Counter2></Counter2> */}
      {/* <UpdateObjects></UpdateObjects> */}
      {/* <StateExample></StateExample> */}

      {/* UseEffect */}
      {/* <UseEffectDemo1></UseEffectDemo1> */}
      {/* <UseEffectDemo2></UseEffectDemo2> */}
      {/* <EffectExample></EffectExample> */}

      {/* UseContext */}
      {/* <ContextDemoA></ContextDemoA> */}
      {/* <BeforeContextExample></BeforeContextExample> */}
      {/* <ContextExample></ContextExample> */}

      {/* UseReducer */}
      {/* <BeforeReducerDemo></BeforeReducerDemo> */}
      {/* <ReducerDemo></ReducerDemo> */}

      {/* UseRef */}
      {/* <RefDemo></RefDemo> */}
      {/* <RefExample></RefExample> */}

      {/* ImperativeHandle */}
      {/* <ImperativeHandle></ImperativeHandle> */}

      {/* UseLayoutEffect */}
      {/* <LayoutEffect></LayoutEffect> */}

      {/* UseDeferredValue */}
      {/* <DeferredValueExample></DeferredValueExample> */}

      {/* UseSyncExternalStore */}
      {/* <SyncExternalStoreExample></SyncExternalStoreExample> */}
      {/* <BeforeSyncExternalStoreExample></BeforeSyncExternalStoreExample> */}

      {/* UseInsertionEffect */}
      {/* <InsertionEffect></InsertionEffect> */}

      {/* UseId */}
      {/* <UseIdExample></UseIdExample> */}

      {/* Transition */}
      {/* <TransitionExample></TransitionExample> */}

      {/* UseMemo */}
      {/* <BeforeMemo></BeforeMemo> */}
      {/* <MemoDemo></MemoDemo> */}

      {/* UseCallback */}
      {/* <BeforeCallback></BeforeCallback> */}
      {/* <CallbackDemo></CallbackDemo> */}

      {/* Custom Hooks */}
      {/* <IntervalProblem></IntervalProblem> */}
      {/* <IntervalProblem2></IntervalProblem2> */}
      {/* <UseIntervalDemo></UseIntervalDemo> */}

      {/* Data Fetching */}
      {/* <DataFetchDemo1></DataFetchDemo1> */}
      {/* <DataFetchDemo2></DataFetchDemo2> */}

      {/* Design Patterns */}
      {/* <ContainerPresentational></ContainerPresentational> */}
      {/* React Query */}
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <Stopwatch></Stopwatch> */}
      {/* <Countdown initSeconds={60}></Countdown> */}
      {/* </QueryClientProvider> */}
      {/* React Router */}

      <Router>
        <Routes>
          <Route path='/' element={
            <div>
              <h1>HOC - High Order Component</h1>
              <p className='text-red-500'>Login Page For Unauthenticated</p>
            </div>
          }></Route>
          <Route path='/profile' element={<AuthenticatedProfile></AuthenticatedProfile>}></Route>
          <Route path='/dashboard' element={<AuthenticatedDashboard></AuthenticatedDashboard>}></Route>

        </Routes>
      </Router>


    </>
  )
}

export default App
