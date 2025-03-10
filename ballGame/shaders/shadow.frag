#version 450

layout (location = 0) out float outFragColor;

layout (location = 0) in vec3 inPos;
layout (location = 1) in vec3 inLightPos;

void main() 
{
	// Store distance to light as 32 bit float value
    vec3 lightVec = inPos.xyz - inLightPos;
    //maxlength = length(vec3(zfar))
    outFragColor = length(lightVec) / length(vec3(10.1));
}