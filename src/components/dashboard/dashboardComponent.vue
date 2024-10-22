<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <div class="p-6 bg-gray-100 mb-20">
        <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
          <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500">
              <a href="#" class="text-gray-700">Home</a>
              <svg
                class="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                />
              </svg>
            </li>
            <li class="flex items-center">
              <a href="#" class="text-gray-600">Dashboard</a>
            </li>
          </ol>
        </nav>
        <!-- breadcrumb end -->

        <div class="lg:flex justify-between items-center mb-6">
          <p class="text-2xl font-semibold mb-2 lg:mb-0">
            Hola, {{ authStore.getDataUser.name }}
          </p>
          <!-- <button
            class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow"
          >
            View Logs
          </button> -->
        </div>

        <div class="">
          <!-- Inicio de card principales -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
          >
            <div
              class="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5"
            >
              <div class="flex justify-between mb-6">
                <div>
                  <div class="flex items-center mb-1">
                    <div class="text-2xl font-semibold">2</div>
                  </div>
                  <div class="text-sm font-medium text-gray-400">
                    Comerciantes
                  </div>
                </div>
                <div class="dropdown">
                  <button
                    type="button"
                    class="dropdown-toggle text-gray-400 hover:text-gray-600"
                  >
                    <i class="ri-more-fill"></i>
                  </button>
                  <ul
                    class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
                  >
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Profile</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Logout</a
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href="/gebruikers"
                class="text-[#f84525] font-medium text-sm hover:text-red-800"
                >Ver</a
              >
            </div>
            <div
              class="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5"
            >
              <div class="flex justify-between mb-6">
                <div>
                  <div class="flex items-center mb-1">
                    <div class="text-2xl font-semibold">2</div>
                  </div>
                  <div class="text-sm font-medium text-gray-400">
                    Particulares
                  </div>
                </div>
                <div class="dropdown">
                  <button
                    type="button"
                    class="dropdown-toggle text-gray-400 hover:text-gray-600"
                  >
                    <i class="ri-more-fill"></i>
                  </button>
                  <ul
                    class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
                  >
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Profile</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Logout</a
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href="/gebruikers"
                class="text-[#f84525] font-medium text-sm hover:text-red-800"
                >Ver</a
              >
            </div>
            <div
              class="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5"
            >
              <div class="flex justify-between mb-4">
                <div>
                  <div class="flex items-center mb-1">
                    <div class="text-2xl font-semibold">100</div>
                  </div>
                  <div class="text-sm font-medium text-gray-400">Ventas</div>
                </div>
                <div class="dropdown">
                  <button
                    type="button"
                    class="dropdown-toggle text-gray-400 hover:text-gray-600"
                  >
                    <i class="ri-more-fill"></i>
                  </button>
                  <ul
                    class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
                  >
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Profile</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Logout</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="/dierenartsen"
                class="text-[#f84525] font-medium text-sm hover:text-red-800"
                >Ver</a
              >
            </div>
            <div
              class="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5"
            >
              <div class="flex justify-between mb-6">
                <div>
                  <div class="flex items-center mb-1">
                    <div class="text-2xl font-semibold mb-1">100</div>
                    <div
                      class="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2"
                    >
                      +30%
                    </div>
                  </div>
                  <div class="text-sm font-medium text-gray-400">
                    Monto obtenido
                  </div>
                </div>
                <div class="dropdown">
                  <button
                    type="button"
                    class="dropdown-toggle text-gray-400 hover:text-gray-600"
                  >
                    <i class="ri-more-fill"></i>
                  </button>
                  <ul
                    class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
                  >
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Profile</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Logout</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href=""
                class="text-[#f84525] font-medium text-sm hover:text-red-800"
                >Ver</a
              >
            </div>
          </div>
          <!-- Fin de card principales -->
          <!-- Inicio de graficas, primera fila -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div
              class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md"
            >
              <div class="flex justify-between mb-4 items-start">
                <div class="font-medium">Montos por mes</div>
              </div>
              <div class="overflow-x-auto">
                <general-grafic-component></general-grafic-component>
              </div>
            </div>
            <div
              class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md"
            >
              <div class="flex justify-between mb-4 items-start">
                <div class="font-medium">Ventas por mes</div>
              </div>
              <div class="overflow-x-auto">
                <monthly-openings-component></monthly-openings-component>
              </div>
            </div>
          </div>
          <!-- Fin de graficas, primera fila -->
          <!-- Inicio de graficas, segunda fila -->
          <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div
              class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md"
            >
              <div class="flex justify-between mb-4 items-start">
                <div class="font-medium">Categorias</div>
              </div>
              <div class="overflow-x-auto">
                <categories-grafic-component></categories-grafic-component>
              </div>
            </div>
            <div
              class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md"
            >
              <div class="flex justify-between mb-4 items-start">
                <div class="font-medium">Estatus de usuarios</div>
              </div>
              <div class="overflow-x-auto">
                <users-grafic-component></users-grafic-component>
              </div>
            </div>
          </div> -->
          <!-- Fin de graficas, segunda fila -->
          <!-- Inicio de tablas principales -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div
              class="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded"
            >
              <div class="rounded-t mb-0 px-0 border-0">
                <div class="flex flex-wrap items-center px-4 py-2">
                  <div class="relative w-full max-w-full flex-grow flex-1">
                    <h3
                      class="font-semibold text-base text-gray-900 dark:text-gray-50"
                    >
                      Usuarios
                    </h3>
                  </div>
                </div>
                <div class="block w-full overflow-x-auto">
                  <table
                    class="items-center w-full bg-transparent border-collapse"
                  >
                    <thead>
                      <tr>
                        <th
                          class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                        >
                          Rol
                        </th>
                        <th
                          class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                        >
                          Cantidad
                        </th>
                        <th
                          class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-gray-700 dark:text-gray-100">
                        <th
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                        >
                          Administrator
                        </th>
                        <td
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                          1
                        </td>
                        <td
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                          <div class="flex items-center">
                            <span class="mr-2">70%</span>
                            <div class="relative w-full">
                              <div
                                class="overflow-hidden h-2 text-xs flex rounded bg-blue-200"
                              >
                                <div
                                  style="width: 70%"
                                  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="text-gray-700 dark:text-gray-100">
                        <th
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                        >
                          User
                        </th>
                        <td
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                          6
                        </td>
                        <td
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                          <div class="flex items-center">
                            <span class="mr-2">40%</span>
                            <div class="relative w-full">
                              <div
                                class="overflow-hidden h-2 text-xs flex rounded bg-blue-200"
                              >
                                <div
                                  style="width: 40%"
                                  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="text-gray-700 dark:text-gray-100">
                        <th
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                        >
                          User
                        </th>
                        <td
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                          5
                        </td>
                        <td
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                          <div class="flex items-center">
                            <span class="mr-2">45%</span>
                            <div class="relative w-full">
                              <div
                                class="overflow-hidden h-2 text-xs flex rounded bg-pink-200"
                              >
                                <div
                                  style="width: 45%"
                                  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="text-gray-700 dark:text-gray-100">
                        <th
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                        >
                          User
                        </th>
                        <td
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                          4
                        </td>
                        <td
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                          <div class="flex items-center">
                            <span class="mr-2">60%</span>
                            <div class="relative w-full">
                              <div
                                class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                              >
                                <div
                                  style="width: 60%"
                                  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md"
            >
              <div class="flex justify-between mb-4 items-start">
                <div class="font-medium">Actividad</div>
                <div class="dropdown">
                  <button
                    type="button"
                    class="dropdown-toggle text-gray-400 hover:text-gray-600"
                  >
                    <i class="ri-more-fill"></i>
                  </button>
                  <ul
                    class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
                  >
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Profile</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Logout</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="overflow-hidden">
                <table class="w-full min-w-[540px]">
                  <tbody>
                    <tr>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="flex items-center">
                          <a
                            href="#"
                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >Lorem Ipsum</a
                          >
                        </div>
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-gray-400"
                          >02-02-2024</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-gray-400"
                          >17.45</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="dropdown">
                          <button
                            type="button"
                            class="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"
                          >
                            <i class="ri-more-2-fill"></i>
                          </button>
                          <ul
                            class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
                          >
                            <li>
                              <a
                                href="#"
                                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                >Profile</a
                              >
                            </li>
                            <li>
                              <a
                                href="#"
                                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                >Settings</a
                              >
                            </li>
                            <li>
                              <a
                                href="#"
                                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                >Logout</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="flex items-center">
                          <a
                            href="#"
                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >Lorem Ipsum</a
                          >
                        </div>
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-gray-400"
                          >02-02-2024</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-gray-400"
                          >17.45</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="dropdown">
                          <button
                            type="button"
                            class="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"
                          >
                            <i class="ri-more-2-fill"></i>
                          </button>
                          <ul
                            class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
                          >
                            <li>
                              <a
                                href="#"
                                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                >Profile</a
                              >
                            </li>
                            <li>
                              <a
                                href="#"
                                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                >Settings</a
                              >
                            </li>
                            <li>
                              <a
                                href="#"
                                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                >Logout</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Fin de tablas principales -->
          <!-- Inicio de tablas segundarias -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div
              class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2"
            >
              <div class="flex justify-between mb-4 items-start">
                <div class="font-medium">Estadisticas</div>
                <div class="dropdown">
                  <button
                    type="button"
                    class="dropdown-toggle text-gray-400 hover:text-gray-600"
                  >
                    <i class="ri-more-fill"></i>
                  </button>
                  <ul
                    class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
                  >
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Profile</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Logout</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4"
              >
                <div
                  class="rounded-md border border-dashed border-gray-200 p-4"
                >
                  <div class="flex items-center mb-0.5">
                    <div class="text-xl font-semibold">10</div>
                    <span
                      class="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1"
                      >$80</span
                    >
                  </div>
                  <span class="text-gray-400 text-sm">Active</span>
                </div>
                <div
                  class="rounded-md border border-dashed border-gray-200 p-4"
                >
                  <div class="flex items-center mb-0.5">
                    <div class="text-xl font-semibold">50</div>
                    <span
                      class="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1"
                      >+$469</span
                    >
                  </div>
                  <span class="text-gray-400 text-sm">Completed</span>
                </div>
                <div
                  class="rounded-md border border-dashed border-gray-200 p-4"
                >
                  <div class="flex items-center mb-0.5">
                    <div class="text-xl font-semibold">4</div>
                    <span
                      class="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1"
                      >-$130</span
                    >
                  </div>
                  <span class="text-gray-400 text-sm">Canceled</span>
                </div>
              </div>
              <div>
                <canvas id="order-chart"></canvas>
              </div>
            </div>
            <div
              class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md"
            >
              <div class="flex justify-between mb-4 items-start">
                <div class="font-medium">Ganancias</div>
                <div class="dropdown">
                  <button
                    type="button"
                    class="dropdown-toggle text-gray-400 hover:text-gray-600"
                  >
                    <i class="ri-more-fill"></i>
                  </button>
                  <ul
                    class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
                  >
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Profile</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >Logout</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full min-w-[460px]">
                  <thead>
                    <tr>
                      <th
                        class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md"
                      >
                        Service
                      </th>
                      <th
                        class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left"
                      >
                        Earning
                      </th>
                      <th
                        class="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            class="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >Create landing page</a
                          >
                        </div>
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-emerald-500"
                          >+$235</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span
                          class="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none"
                          >Pending</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            class="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >Create landing page</a
                          >
                        </div>
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-rose-500"
                          >-$235</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span
                          class="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none"
                          >Withdrawn</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            class="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >Create landing page</a
                          >
                        </div>
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-emerald-500"
                          >+$235</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span
                          class="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none"
                          >Pending</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            class="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >Create landing page</a
                          >
                        </div>
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-rose-500"
                          >-$235</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span
                          class="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none"
                          >Withdrawn</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            class="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >Create landing page</a
                          >
                        </div>
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-emerald-500"
                          >+$235</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span
                          class="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none"
                          >Pending</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            class="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >Create landing page</a
                          >
                        </div>
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-rose-500"
                          >-$235</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span
                          class="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none"
                          >Withdrawn</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            class="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >Create landing page</a
                          >
                        </div>
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-emerald-500"
                          >+$235</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span
                          class="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none"
                          >Pending</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            class="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >Create landing page</a
                          >
                        </div>
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-rose-500"
                          >-$235</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span
                          class="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none"
                          >Withdrawn</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            class="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >Create landing page</a
                          >
                        </div>
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-emerald-500"
                          >+$235</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span
                          class="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none"
                          >Pending</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <div class="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            class="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            class="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >Create landing page</a
                          >
                        </div>
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span class="text-[13px] font-medium text-rose-500"
                          >-$235</span
                        >
                      </td>
                      <td class="py-2 px-4 border-b border-b-gray-50">
                        <span
                          class="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none"
                          >Withdrawn</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Fin de tablas segundarias -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import "animate.css";
import { date } from "quasar";
import { computed, onMounted, ref, watchEffect, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import generalGraficComponent from "./grafic/generalGraficComponent.vue";
import monthlyOpeningsComponent from "./grafic/monthlyOpeningsComponent.vue";
import categoriesGraficComponent from "./grafic/categoriesGraficComponent.vue";
import usersGraficComponent from "./grafic/usersGraficComponent.vue";
const authStore = useAuthStore();
const router = useRouter();
import { useManageLayout } from "../../stores/manageLayout";
const manageLayout = useManageLayout();
const series = [
  {
    name: "Servings",
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
  },
];
const chartOptions = {
  annotations: {
    points: [
      {
        x: "Bananas",
        seriesIndex: 0,
        label: {
          borderColor: "#775DD0",
          offsetY: 0,
          style: {
            color: "#fff",
            background: "#775DD0",
          },
          text: "Bananas are good",
        },
      },
    ],
  },
  chart: {
    height: 350,
    type: "bar",
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "50%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  grid: {
    row: {
      colors: ["#fff", "#f2f2f2"],
    },
  },
  xaxis: {
    labels: {
      rotate: -45,
    },
    categories: [
      "Apples",
      "Oranges",
      "Strawberries",
      "Pineapples",
      "Mangoes",
      "Bananas",
      "Blackberries",
      "Pears",
      "Watermelons",
      "Cherries",
      "Pomegranates",
      "Tangerines",
      "Papayas",
    ],
    tickPlacement: "on",
  },
  yaxis: {
    title: {
      text: "Servings",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100],
    },
  },
};
defineOptions({
  name: "dashboardComponent",
});
</script>
