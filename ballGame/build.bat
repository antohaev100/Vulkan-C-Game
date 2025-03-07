cmake -G "MinGW Makefiles" -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_EXE_LINKER_FLAGS="-static"
cmake --build .\build\ --target all -j16